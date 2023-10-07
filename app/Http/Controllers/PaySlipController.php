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
        $paidInfo = $this->getPaidInfo();
        return response(["unpaidInfo" => $unpaidInfo,"remainingInfo"=>$remainingInfo,"paidInfo"=>$paidInfo],200);
    }

    //getting info for the nav card
    public function getPaidInfo(){
        $userId = Auth::user()->id;
        $compnayId = Auth::user()->company_id;
        if(Auth::user()->role_id ==1 ){
            $paid = DB::table('payments')->where('company_id',$compnayId)->get();
        }
        if(Auth::user()->role_id==0){
            $paid = DB::table('payments')->where('user_id',$userId)->get();
        }
        $totalPay=0;
        $totalHours=0;
        foreach ($paid as $pay) {
            $totalPay = $totalPay + $pay->payment;
            $totalHours = $totalHours + $pay->hours;
        }
        $totalCount = $paid->count();
        return ['totalCount'=>$totalCount,'totalPay'=>$totalPay,'totalHours'=>$totalHours];
    }
    public function getUnpaidInfo()
    {
        $userId = Auth::user()->id;
        $company_id = Auth::user()->company_id;
        if(Auth::user()->role_id==1){
            $taskIds = DB::table('task_user')->where('company_id',$company_id)
                                             ->pluck('task_id')->toArray();

        }
        else{
            $taskIds = DB::table('task_user')
                ->where('user_id', $userId)
                ->pluck('task_id')
                ->toArray();
        }
        $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)->where("status",2)->select('id','start_time','start_date','end_time','end_date')->get();
        $customTasks = [];
        $totalPay=0;
        $totalHours=0;
        foreach ($tasks as $task) {
            if(Auth::user()->role_id==1){
                $user_id = DB::table("task_user")->where('task_id',$task->id)->value('user_id');
                $payrate=DB::table('users')->where('id',$user_id)->value('payrate');
            }
            else{
                $payrate = Auth::user()->payrate;
            }
            $customTask = [
                'start_time' => $task->start_time,
                'start_date' => $task->start_date,
                'end_time' => $task->end_time,
                'end_date' => $task->end_date,
                'payDetail'=>
                UtilityController::calculateInterval($task->start_date,$task->start_time,$task->end_date,$task->end_time,$payrate),
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
        $companyId = Auth::user()->company_id;
        if(Auth::user()->role_id == 0){
        $taskIds = DB::table('task_user')
            ->where('user_id', $userId)
            ->pluck('task_id')
            ->toArray();
        }else{
        $taskIds = DB::table('task_user')
            ->where('company_id', $companyId)
            ->pluck('task_id')
            ->toArray();

        }
                $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)->where("status",1)->select('id','start_time','start_date','end_time','end_date')->paginate(5);
        $customTasks = [];
        $totalPay=0;
        $totalHours=0;
        foreach ($tasks as $task) {
            if(Auth::user()->role_id==1){
                $user_id = DB::table("task_user")->where('task_id',$task->id)->value('user_id');
                $payrate=DB::table('users')->where('id',$user_id)->value('payrate');
            }
            else{
                $payrate = Auth::user()->payrate;
            }
            $customTask = [
                'start_time' => $task->start_time,
                'start_date' => $task->start_date,
                'end_time' => $task->end_time,
                'end_date' => $task->end_date,
                'payDetail'=>UtilityController::calculateInterval($task->start_date,$task->start_time,$task->end_date,$task->end_time,$payrate),
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
        $userId = Auth::user()->id;
        $companyId = Auth::user()->company_id;
        $userRate = Auth::user()->payrate;

        //for the employee
        if(Auth::user()->role_id==1){
            $taskIds = DB::table('task_user')
                ->where('company_id', $companyId)
                ->pluck('task_id')
                ->toArray();
        }
        else{
            $taskIds = DB::table('task_user')
                ->where('company_id', $companyId)
                ->pluck('task_id')
                ->toArray();
        }
        $tasks = DB::table('tasks')
            ->whereIn('id', $taskIds)
            ->where("status", 2)
            ->paginate($key);
        $customTasks = [];
        $totalPay = 0;
        $totalHours = 0;
        $finalTask = $tasks->map(function ($task){
            if(Auth::user()->role_id==1){
                $user_id = DB::table("task_user")->where('task_id',$task->id)->value('user_id');
                $payrate=DB::table('users')->where('id',$user_id)->value('payrate');
                $employee_name = DB::table("users")->where('id',$user_id)->value('username');
            }
            else{
                $payrate = Auth::user()->payrate;
                $user_id = Auth::user()->id;
                $employee_name = Auth::user()->username;
            }
            $type = DB::table('types')->where('id', $task->type_id)->first();
            $location = DB::table('locations')->where('id', $task->location_id)->first();
            return [
                'id' => $task->id,
                'status' => $task->status,
                'payDetail' => UtilityController::calculateInterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, $payrate),
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
                    'id' => $user_id,
                    'name' => $employee_name,
                ]
            ];
        });
        $modifiedTasks = $finalTask->all();
        return response(["data" => $modifiedTasks], 200);

    }

    public function getTodoList($key)
    {

        $userId = Auth::user()->id;
        $companyId = Auth::user()->company_id;
        if(Auth::user()->role_id==0){
            $userrate = auth::user()->payrate;
            $taskids = db::table('task_user')
                ->where('user_id', $userId)
                ->pluck('task_id')
                ->toarray();
            }else {
            $taskids = db::table('task_user')
                ->where('company_id', $companyId)
                ->pluck('task_id')
                ->toarray();

            }
            $tasks = db::table('tasks')
                ->wherein('id', $taskids)
                ->where("status", 1)
                ->paginate($key);
            $customtasks = [];
            $totalpay = 0;
            $totalhours = 0;
            $finaltask = $tasks->map(function ($task) {
            if(Auth::user()->role_id==1){
                $user_id = DB::table("task_user")->where('task_id',$task->id)->value('user_id');
                $payrate=DB::table('users')->where('id',$user_id)->value('payrate');
                $employee_name = DB::table("users")->where('id',$user_id)->value('username');
            }
            else{
                $payrate = Auth::user()->payrate;
                $user_id = Auth::user()->id;
                $employee_name = Auth::user()->username;
            }
                $type = db::table('types')->where('id', $task->type_id)->first();
                $location = db::table('locations')->where('id', $task->location_id)->first();
                return [
                    'id' => $task->id,
                    'status' => $task->status,
                    'paydetail' => Utilitycontroller::calculateinterval($task->start_date, $task->start_time, $task->end_date, $task->end_time, $payrate),
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
                        'id' => $user_id,
                        'name' =>$employee_name,
                    ]
                ];
            });
            $modifiedtasks = $finaltask->all();
            return response(["data" => $modifiedtasks], 200);
    }

    public function getPaidList($key){
        $company_id = Auth::user()->company_id;
        $user_id = Auth::user()->id;
        if(Auth::user()->role_id == 1){
            $paid = DB::table("payments")->where("company_id",$company_id)->paginate($key);
        }
        else{
            $paid = DB::table("payments")->where("user_id",$user_id)->paginate($key);
        }
            $modifiedList=$paid->map(function($pay){
                $donor_id = $pay->user_id;
                $donor_name = DB::table('users')->where('id',$donor_id)->value('username');
                $receiver_id= DB::table("task_user")->where('task_id',$pay->task_id)->value('user_id');
                $receiver_name = DB::table('users')->where('id',$receiver_id)->value('username');
                $job_id = DB::table('tasks')->where('id',$pay->task_id)->value('type_id');
                $job_type = DB::table('types')->where('id',$job_id)->value('type');
                $job_status =DB::table("tasks")->where('id',$job_id)->value('status');
                return [
                    'id' => $pay->id,
                    'type'=>$job_type,
                    'status'=>3,
                    'paid_by' =>$donor_name,
                    'paid_to' =>$receiver_name,
                    'total_hours'=> $pay->hours,
                    'total_amount' => $pay->payment,
                    'paid_date' =>$pay->created_at,
                ];
            });
            return response(["data"=>$modifiedList]);
    }


    public function showTodo(){
        return Inertia::render("Payslip/Todo/Todo.jsx");
    }
    public function showPaid(){
        return Inertia::render("Payslip/Paid/Paid.jsx");
    }
    //for to mark the task as paid
    public function markAsPaid($id){
        if(Auth::user()->role_id==1){

            //change the task status to 3
            //add new payment to the paidTable
        }
    }
}



