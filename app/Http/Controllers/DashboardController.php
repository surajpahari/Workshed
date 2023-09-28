<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Task;
use App\Models\Notice;
use App\Models\General;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Http\Response;
use App\Events\Message;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return Inertia::render('Dashboard/Dashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required',
        ]);
        if ($validator->fails()) {
            return;
        }
        $company = Auth::user()->company;
        $notice = new Notice;
        $notice  ->user_id = Auth::user()->id;
        $notice  ->to = 'all';
        $notice  ->message = $request->message;
        $notice  ->date = date('Y-m-d');
        $notice  ->time= date('H:i:s');
        $notice  ->status = 1;
        $company->notices()->save($notice);
    }
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getMessages()
    {
        $company = Auth::user()->company;

        // Retrieve notices with user information (including name).
        $noticesWithUser = $company->notices()->with('user')->get();

        // Extract message and user name from each notice.
        $formattedNotices = $noticesWithUser->map(function ($notice) {
            return [
                'message' => $notice->message,
                'username' => $notice->user->username,
                'self' => ($notice->user_id == Auth::user()->id) ? true : false,
            ];
        });

        return response()->json($formattedNotices);
    }
    public function getCalendarData(Request $request)
    {
        if(Auth::user()->role_id===1){
            $colors = ["red", "#007bff", "#17a2b8"];
            $data = Auth::user()->company->tasks->map(function ($task, $index) use ($colors) {
                $start_date = strtotime($task->start_date . ' ' . $task->start_time);
                $end_date = strtotime($task->end_date . ' ' . $task->end_time);
                return [
                    'title' => $task->type->type,
                    'start' =>date('Y-m-d H:i:s',$start_date),
                    'end' =>date('Y-m-d H:i:s', $end_date),
                    'allDay' => false,
                ];
            });

            return response()->json($data);
        }
        return response()->json([]);

    }
}
