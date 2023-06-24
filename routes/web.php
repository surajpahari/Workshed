<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use function PHPUnit\Framework\returnSelf;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::middleware(['guest'])->group(function(){

    //Welcome Page
    Route::get('/', function () {
        return Inertia::render('Welcome');
    });
    //Singup Page
    Route::get('/signup',function(){
        return Inertia::render('User/SingUp');
    })->name('signin');
    //Singin Page
    Route::get('signin',function(){
        return Inertia::render("User/SignIn");
    })->name('signin');
    //SignUP Request
    Route::post('signup',[UserController::class,'createUser']);
});


//For built in login functioanliy
Auth::routes();

Route::middleware(['auth'])->group(function(){
    //Dashboard home
    Route::get('/dashboard',function(){
        return Inertia::render("Dashboard");
    })->name('dashboard');
});

Route::controller(EmployeeController::class)->middleware(['auth','admin'])->group(function(){
    //EmplyeeController
    Route::get('/employee','index');
    Route::post('/employee','create');
});






