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
    /* public function store(Request $request) */
    /* { */
    /*     // */
    /**/
    /*     $validator = Validator::make($request->all(), [ */
    /*         'message' => 'required', */
    /*     ]); */
    /**/
    /*     if ($validator->fails()) { */
    /*         return response()->json(['errors' => $validator->errors()->all()]); */
    /*     } */
    /**/
    /*     $notice = new Notice; */
    /*     $notice  ->from = Auth::user()->id; */
    /*     $notice  ->to = 'all'; */
    /*     $notice  ->message = $request->message; */
    /*     $notice  ->date = date('Y-m-d'); */
    /*     $notice  ->time= date('H:i:s'); */
    /*     $notice  ->company = Auth::user()->company; */
    /*     $notice  ->status = 1; */
    /*     $notice ->save(); */
    /**/
    /*     //$notices=Notice::where('company', Auth::user()->company)->orderBy('id', 'desc')->take(1)->get(); */
    /**/
    /*     return back(); */
    /**/
    /**/
    /**/
    /*     //return $request; */
    /* } */
    /**/
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /* public function show(Request $request) */
    /* { */
    /*     // */
    /*     if($request->ajax()){ */
    /**/
    /**/
    /*     $notices=DB::table('notices')->select('*', 'users.id as UID') */
    /*         ->join('users', 'notices.from', '=', 'users.id') */
    /*         ->where('notices.company', Auth::user()->company)->orderBy('notices.id', 'desc')->take(10)->get(); */
    /*     $data=[]; */
    /*     foreach($notices as $notice) */
    /*     { */
    /*         if($notice->UID == Auth::user()->id) */
    /*         { */
    /**/
    /*             $data[]="<div class='direct-chat-msg right'> */
    /*             <div class='direct-chat-infos clearfix'> */
    /*               <span class='direct-chat-name float-right'>".$notice->username."</span> */
    /*               <span class='direct-chat-timestamp float-left'>".date("d M Y h:i A", strtotime($notice->date ." ".$notice->time))."</span> */
    /*             </div> */
    /*             <img class='direct-chat-img' src='/uploads/avatars/".$notice->avatar."' alt='Message User Image'> */
    /**/
    /*             <div class='direct-chat-text'> */
    /*               ".$notice->message." */
    /*             </div> */
    /**/
    /*           </div> */
    /*             "; */
    /*         }else{ */
    /*             $data[]= "<div class='direct-chat-msg'> */
    /*             <div class='direct-chat-infos clearfix'> */
    /*               <span class='direct-chat-name float-left'>".$notice->username."</span> */
    /*               <span class='direct-chat-timestamp float-right'>".date("d M Y h:i A", strtotime($notice->date ." ".$notice->time))."</span> */
    /*             </div> */
    /*             <img class='direct-chat-img' src='/uploads/avatars/".$notice->avatar."' alt='Message User Image'> */
    /**/
    /*             <div class='direct-chat-text'> */
    /*               ".$notice->message." */
    /*             </div> */
    /*           </div>"; */
    /*         } */
    /*     } */
    /*     return $data; */
    /* } */

    /**
     * Show the form for editing the specified resource.
     *
     */
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

    public function sendnotice(Request $request)
    {

    }

public function getCalendarData(Request $request)
{
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
}
