<?php namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Task;
use App\Models\User;
use App\Models\Type;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use App\Http\Controllers\UtilityController;
use Auth;

class PaySlipController extends Controller
{
    public function index()
    {
        Inertia::render("Payslip/PaySlip");
    }

    public function getInfo()
    {
        $unpaidInfo = $this->getUnpaidInfo();
        $remainingInfo= $this->getRemainingInfo();
        return response(["unpaidInfo" => $unpaidInfo,"remainingInfo"=>$remainingInfo], 200);
    }


    //getting info for the nav card
    public function getUnpaidInfo()
    {
        $userId = Auth::user()->id;
        $userRate = Auth::user()->payrate;
        $taskIds = DB::table('task_user')
            ->where('user_id', $userId)
            ->pluck('task_id')
            ->toArray();
        $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)->where("status",2)->select('start_time','start_date','end_time','end_date')->get();
        $customTasks = [];
        $totalPay=0;
        $totalHours=0;
        foreach ($tasks as $task) {
            $customTask = [
                'start_time' => $task->start_time,
                'start_date' => $task->start_date,
                'end_time' => $task->end_time,
                'end_date' => $task->end_date,
                'payDetail'=>UtilityController::calculateInterval($task->start_date,$task->start_time,$task->end_date,$task->end_time,$userRate),
            ];
            $customTasks[] = $customTask;
            $totalPay=$totalPay+$customTask['payDetail']['totalPay'];
            $totalHours=$totalHours+$customTask['payDetail']['totalHours'];
        }
        $totalCount = $tasks->count();
        return ["tasks"=>$customTasks,"totalCount"=>$totalCount,"totalPay"=>$totalPay,"totalHours"=>$totalHours];
    }
    public function getRemainingInfo()
    {
        $userId = Auth::user()->id;
        $userRate = Auth::user()->payrate;
        $taskIds = DB::table('task_user')
            ->where('user_id', $userId)
            ->pluck('task_id')
            ->toArray();
        $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)->where("status",1)->select('start_time','start_date','end_time','end_date')->paginate(5);
        $customTasks = [];
        $totalPay=0;
        $totalHours=0;
        foreach ($tasks as $task) {
            $customTask = [
                'start_time' => $task->start_time,
                'start_date' => $task->start_date,
                'end_time' => $task->end_time,
                'end_date' => $task->end_date,
                'payDetail'=>UtilityController::calculateInterval($task->start_date,$task->start_time,$task->end_date,$task->end_time,$userRate),
            ];
            $customTasks[] = $customTask;
            $totalPay=$totalPay+$customTask['payDetail']['totalPay'];
            $totalHours=$totalHours+$customTask['payDetail']['totalHours'];
        }
        $totalCount = $tasks->count();
        return ["tasks"=>$customTasks,"totalCount"=>$totalCount,"totalPay"=>$totalPay,"totalHours"=>$totalHours];
    }

    public function getUnpaidList($key)
    {

        if(Auth::user()->role_id == 0){
            //for the employee
            $userId = Auth::user()->id;
            $userRate = Auth::user()->payrate;
            $taskIds = DB::table('task_user')
                ->where('user_id', $userId)
                ->pluck('task_id')
                ->toArray();
            $tasks = DB::table('tasks')
                ->whereIn('id', $taskIds)
                ->where("status", 2)
                ->paginate($key);
            $customTasks = [];
            $totalPay = 0;
            $totalHours = 0;
            $finalTask = $tasks->map(function ($task) use ($userRate) {
                $type = DB::table('types')->where('id', $task->type_id)->first();
                $location = DB::table('locations')->where('id', $task->location_id)->first();
                $paymentInfo = UtilityController::calculateInterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, Auth::user()->payrate);
                return [
                    'id' => $task->id,
                    'status' => $task->status,
                    'payDetail' => UtilityController::calculateInterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, $userRate),
                    'type' => [
                        'id' => $type->id,
                        'type' => $type->type,
                    ],
                    'location' => [
                        'id' => $location->id,
                        'name' => $location->name,
                    ],
                    'tablename' => $type->type,
                    'user' => [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                    ]
                ];
            });
            $modifiedTasks = $finalTask->all();
            return response(["data" => $modifiedTasks], 200);
        }

        $company_id = Auth::user()->company_id;
        $taskIds = DB::table('task_user')
            ->where('company_id', $company_id)
            ->pluck('task_id')
            ->toArray();

        $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)
            ->where("status", 2)
            ->paginate($key);
        /* return response(["data"=>$tasks]); */
        $customTasks = [];
        $totalPay = 0;
        $totalHours = 0;
        $finalTask = $tasks->map(function ($task)  {
            $type = DB::table('types')->where('id', $task->type_id)->first();
            $location = DB::table('locations')->where('id', $task->location_id)->first();
            $user_id = DB::table('task_user')->where('task_id', $task->id)->value('user_id');
            $pay_rate = DB::table('users')->where('id',$user_id)->value('payrate');
            return [
                'id' => $task->id,
                'status' => $task->status,
                'payDetail' => UtilityController::calculateInterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, $pay_rate),
                'type' => [
                    'id' => $type->id,
                    'type' => $type->type,
                ],
                'location' => [
                    'id' => $location->id,
                    'name' => $location->name,
                ],
                'tablename' => $type->type,
                'user' => [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                ]
            ];
        });
        $modifiedTasks=$finalTask->all();
        return response(["data"=>$modifiedTasks],200);
    }

    public function getTodoList($key)
    {
        if(Auth::user()->role_id==0){
            $userid = auth::user()->id;
            $userrate = auth::user()->payrate;
            $taskids = db::table('task_user')
                ->where('user_id', $userid)
                ->pluck('task_id')
                ->toarray();
            $tasks = db::table('tasks')
                ->wherein('id', $taskids)
                ->where("status", 1)
                ->paginate($key);
            $customtasks = [];
            $totalpay = 0;
            $totalhours = 0;
            $finaltask = $tasks->map(function ($task) use ($userrate) {
                $type = db::table('types')->where('id', $task->type_id)->first();
                $location = db::table('locations')->where('id', $task->location_id)->first();
                $paymentinfo = utilitycontroller::calculateinterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, auth::user()->payrate);
                return [
                    'id' => $task->id,
                    'status' => $task->status,
                    'paydetail' => utilitycontroller::calculateinterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, $userrate),
                    'type' => [
                        'id' => $type->id,
                        'type' => $type->type,
                    ],
                    'location' => [
                        'id' => $location->id,
                        'name' => $location->name,
                    ],
                    'tablename' => $type->type,
                    'user' => [
                        'id' => auth::user()->id,
                        'name' => auth::user()->name,
                    ]
                ];
            });
            $modifiedtasks = $finaltask->all();
            return response(["data" => $modifiedtasks], 200);
        }
        $company_id = Auth::user()->company_id;
        $taskIds = DB::table('task_user')
            ->where('company_id', $company_id)
            ->pluck('task_id')
            ->toArray();

        $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)
            ->where("status", 1)
            ->paginate($key);
        /* return response(["data"=>$tasks]); */
        $customTasks = [];
        $totalPay = 0;
        $totalHours = 0;
        $finalTask = $tasks->map(function ($task)  {
            $type = DB::table('types')->where('id', $task->type_id)->first();
            $location = DB::table('locations')->where('id', $task->location_id)->first();
            $user_id = DB::table('task_user')->where('task_id', $task->id)->value('user_id');
            $pay_rate = DB::table('users')->where('id',$user_id)->value('payrate');
            return [
                'id' => $task->id,
                'status' => $task->status,
                'paydetail' => UtilityController::calculateInterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, $pay_rate),
                'type' => [
                    'id' => $type->id,
                    'type' => $type->type,
                ],
                'location' => [
                    'id' => $location->id,
                    'name' => $location->name,
                ],
                'tablename' => $type->type,
                'user' => [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                ]
            ];
        });
        $modifiedTasks=$finalTask->all();
        return response(["data"=>$modifiedTasks],200);

    }


    public function showTodo(){

        return Inertia::render("Payslip/Todo/Todo.jsx");

    }
}



