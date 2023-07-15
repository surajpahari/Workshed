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
        $task->end_time= $req->input('endTime');
        $company->tasks()->save($task);
        dd($task);

    }

    public function getList()
    {
        $tasks = Task::with(['type' => function ($query) {
             $query->select('id', 'type');
        }, 'location'=>function($query){

            $query->select('id','name');
        }])->orderBy('id')->paginate(5);
        return response($tasks, 200);
    }

}
