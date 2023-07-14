<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TypeController;
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
        return Inertia::render('User/SignUp');
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
    Route::get('/employee','index')->name('employee.index');
    Route::post('/employee','create');
    Route::get('/employee-add','showform');
    Route::get('/employee-list','showlist');
    Route::get('/employee-option','provideOptions');
    Route::delete('/employee/destroy/{id}', 'destroy')->name('employee.delete');

});
Route::controller(LocationController::class)->middleware(['auth','admin'])->group(function(){
    Route::get('/location','index');
    Route::post ('/location','store');
    Route::get('/location-option','provideOptions');
});
Route::controller(TypeController::class)->middleware(['auth','admin'])->group(function(){
    Route::get('/type-option','provideOptions');
    Route::get('/job-type','index');
    Route::post ('/job-type','store');
});
Route::controller(TaskController::class)->middleware(['auth','admin'])->group(function(){
    Route::post('/job','store');
    Route::get('/job-list','index');
});
Route::get('/jobs', function(){
    return Inertia::render('Jobs/Job');
})->middleware('auth');




