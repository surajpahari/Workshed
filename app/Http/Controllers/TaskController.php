<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use App\Models\Type;
use App\Models\Location;
use Illuminate\Http\Request;
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
        $task->status=0;
        $task->end_time= $req->input('endTime');
        $company->tasks()->save($task);
        $userIds = $req->input('employee');
        $task->users()->attach($userIds, [
        'company_id' => $company->id,
        'status' => null,
        'email_status' => 'as'
    ]);
    }


    public function getList($key)
    {
        $tasks = Task::with(['type' => function ($query) {
        $query->select('id', 'type');
        }, 'location' => function ($query) {
        $query->select('id', 'name');
        }, 'users' => function ($query) {
        $query->select('users.id', 'users.name');
        }])->orderBy('id')->paginate($key);

        return response($tasks, 200);
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
        }])->where('status',0)->orderBy('id')->paginate($key);
        return response($tasks, 200);
    }
    public  function  showRoster(){
        return Inertia::render('Roster/Roster');
    }
}
