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

    public function store(Request $req)
    {
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
        dd($task);

    }


    public function getList()
    {
        $tasks = Task::with(['type' => function ($query) {
        $query->select('id', 'type');
        }, 'location' => function ($query) {
        $query->select('id', 'name');
        }, 'users' => function ($query) {
        $query->select('users.id', 'users.name');
        }])->orderBy('id')->paginate(5);

        return response($tasks, 200);
    }
    public function showCompletedTasks(){
        return Inertia::render("Jobs/CompletedTask/CompletedTask");
    }
    public function getCompletedTasksList(){
        $tasks = Task::with(['type' => function ($query) {
        $query->select('id', 'type');
        }, 'location' => function ($query) {
        $query->select('id', 'name');
        }, 'users' => function ($query) {
        $query->select('users.id', 'users.name');
        }])->where('status',0)->orderBy('id')->paginate(5);
        return response($tasks, 200);
    }
    public  function  showRoster(){
        return Inertia::render('Roster/Roster');
    }
}
