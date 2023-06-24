<?php

namespace App\Http\Controllers;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{
    public function index(){
        return Inertia::render("Employee");
    }
    public function create(Request $request){
        $this->validate($request,[
            'username' => ['required','string','max:20'],
            'name' => ['required','string','max:20'],
            'email' => ['required','email'],
            'role_id' => ['required','integer',Rule::in([0])],
            'payrate' => ['required','integer','min_digits:3','max_digits:6'],
            'password' => ['required','confirmed','min:6'],
            'phone_no' =>['required','integer','min_digits:10']
        ]);

        $company = Auth::user()->company;

        $employee = new User;
        $employee->name = $request->input('name');
        $employee ->username = $request->input('username');
        $employee ->phone = $request->input('phone_no');
        $employee ->email = $request->input('email');
        $employee ->password = Hash::make($request->input('password'));
        $employee ->role_id= $request->input('role_id');
        $employee ->payrate = $request->input('payrate');

        $company->user()->save($employee);
        return $employee;
    }
    //
}
