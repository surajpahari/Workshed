<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Session;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

   //redirecting new User to the signUp form
    public function newUser(){
        return Inertia::render("User/SignUp.jsx");
    }
    //redirecting user to the singIn form
    public function signIn(){
        return Inertia::render("User/SingIn.jsx");
    }

    //creating new user
    public function createUser(Request $request)
    {
        $this->validate($request,  [
            'companyName' => ['required','unique:companies'],
            'companyContact' => ['required'],
            'companyAddress' => ['required'],
            'name' => ['required'],
            'username'=> ['required','unique:users'],
            'email' => ['required', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]
        );

        /* return($request); */

        try{

                //create user
                $companyName =  explode(" ", trim($request->companyName));

                $user = new User;
                $user ->name = $request->name;
                $user ->role_id= 1;
                $user ->username = $request->username;
                $user ->email = $request->email;
                $user ->password = Hash::make($request->password);
                /* $user ->status = 1; */
                /* $user ->phone =$request->phone; */
                /* $user ->save(); */

                //create company
                $company = new Company;
                $company -> companyName = $request->companyName;
                $company -> short_name = $companyName[0];
                $company -> address = $request->companyAddress;
                /* $company -> person = $request->companyManager; */
                $company -> primary_email = $request->email;
                $company -> primary_contact = $request->companyContract;
                /* $company ->status = 1; */
                $company ->save();
                $company->user()->save($user);

                //insert subscriptions


                return $this->signIn();
                //send email

        }catch(Exception $e){
                // Catch any error from Stripe API request and show
                return redirect()->back()->withInput();
        }
    }
    function test(){
        Inertia::render("Welcome");
    }
}
