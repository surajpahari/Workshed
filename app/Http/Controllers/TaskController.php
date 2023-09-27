<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Task;
use App\Models\User;
use App\Models\Type;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Jobs/Tasks/Task');
        //
    }
    public function taskCalendar()
    {
        $type = Type::where('status', '1')->where('company', Auth::user()->company)->get();
        $taskNo = Task::where('company', Auth::user()->company)->latest()->first();
        //return $taskNo;

        if(count($type)==0)
        {
            flash('Need at least one Job Type!')->warning();
            return view('task.type');
        }

        $location = Location::where('status', '1')->where('company', Auth::user()->company)->get();

        if(count($location)==0)
        {
            flash('Need at least one Job Location!')->warning();
            return view('location.index');
        }

        $users = User::where('id','!=', Auth::user()->id)->where('status', '1')->where('company', Auth::user()->company)->get();

        return view('task.index')->with(['type'=>$type, 'location'=>$location, 'users'=>$users, 'taskno'=>$taskNo]);

    }

    public function store(Request $req)
    {
        $rules=[
            'employee'=>["required"],
            'type'=>["required"],
            'location' => ["required"],
            'startDate'=>["required"],
            'startTime' =>["required"],
            'endDate'=>["required"],
            'endTime'=>["required"]
        ];
        $this->validate($req, $rules);
        $company = Auth::user()->company;
        $task = new Task;
        $task->type_id = $req->input('type');
        $task->location_id = $req->input('location');
        $task->start_date= $req->input('startDate');
        $task->start_time= $req->input('startTime');
        $task->end_date= $req->input('endDate');
        $task->status=2;
        $task->end_time= $req->input('endTime');
        $company->tasks()->save($task);
        $userIds = $req->input('employee');
        $task->users()->attach($userIds, [
            'company_id' => $company->id,
            'status' => null,
            'email_status' => 'as'
        ]);
    }
    public  function destroy($key){
        $company=Auth::user()->company->id;
        $task = Task::findOrFail($key);
        if($company==$task->company_id){
            return response()->json(['message' => 'Authorized'], Response::HTTP_OK);
        }
        else{

            return response()->json(['message' => 'Unauthorized'], Response::HTTP_FORBIDDEN);
        }
    }

    public function getList($key)
    {
        $tasks = Task::with(['type' => function ($query) {
            $query->select('id', 'type as tablename');
        }, 'location' => function ($query) {
            $query->select('id', 'name');
        }, 'users' => function ($query) {
            $query->select('users.id', 'users.name');
        }])->orderBy('id')->paginate($key);

        // Transform the data to include 'status' and 'start' (concatenation of start_date and start_time)
        $transformedTasks = $tasks->map(function ($task) {
            return [
                'id' => $task->id,
                'status' => $task->status,
                'start' => $task->start_date . '  ' . $task->start_time,
                'end' =>$task->end_date.' '.$task->end_time,
                'type' => [
                    'id' => $task->type->id,
                    'type' => $task->type->type,
                ],
                'tablename' => $task->type->tablename,
                'location' => [
                    'id' => $task->location->id,
                    'name' => $task->location->name,
                ],
                'user' => [
                    'id' => $task->users[0]->id,
                    'name' => $task->users[0]->name,
                ],
            ];
        });

        return response(['data' => $transformedTasks], 200);
    }
    public function showCompletedTasks(){
        return Inertia::render("Jobs/CompletedTask/CompletedTask");
    }

    public function getCompletedTasksList($key){
        $tasks = Task::with(['type' => function ($query) {
            $query->select('id', 'type');
        }, 'location' => function ($query) {
            $query->select('id', 'name');
        }, 'users' => function ($query) {
            $query->select('users.id', 'users.name');
        }])->where('status',2)->orderBy('id')->paginate($key);
        $transformedTasks = $tasks->map(function ($task) {
            return [
                'id' => $task->id,
                'status' => $task->status,
                'start' => $task->start_date . '  ' . $task->start_time,
                'end' =>$task->end_date.' '.$task->end_time,
                'type' => [
                    'id' => $task->type->id,
                    'type' => $task->type->type,
                ],
                'tablename' => $task->type->tablename,
                'location' => [
                    'id' => $task->location->id,
                    'name' => $task->location->name,
                ],
                'user' => [
                    'id' => $task->users[0]->id,
                    'name' => $task->users[0]->name,
                ],
            ];
        });

        return response(["data"=>$transformedTasks], 200);
    }
    public  function  showRoster(){
        return Inertia::render('Roster/Roster');
    }
}
