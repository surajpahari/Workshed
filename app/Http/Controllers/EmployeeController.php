<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{
    public function index(){
        return Inertia::render("Employee");
    }
    public function create(Request $req){
        $this->validate($req,[
            'username' => ['required','string','max:20'],
            'name' => ['required','string','max:20'],
            'email' => ['required','email'],
            'role_id' => ['required','integer',Rule::in([1,2])],
            'payrate' => ['required','integer','min_digits:3','max_digits:6'],
            'password' => ['required','confirmed','min:6'],
            'phone_no' =>['required','integer','min_digits:10']
        ]);
        return "validated";
    }
    //
}
