<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\PaySlipController;
use App\Http\Controllers\DashboardController;
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
//For the password reset
Auth::routes(['reset'=>true]);

Route::middleware(['auth'])->group(function(){
    //Dashboard home
    Route::get('/dashboard',function(){
        return Inertia::render("Dashboard");
    })->name('dashboard');
});


Route::controller(DashboardController::class)->middleware(['auth'])->group(function(){
    //EmplyeeController
    Route::get('/dashboard','index')->name('dashboard.index');
    Route::get('/dashboard/getCalendarData', 'getCalendarData')->name('dashboard.getCalendarData');
    Route::post('/send-message','store');
    Route::get('/get-message','getMessages');
    });

Route::controller(EmployeeController::class)->middleware(['auth','admin'])->group(function(){
    //EmplyeeController
    Route::get('/employee','index')->name('employee.index');
    Route::post('/employee','create');
    Route::get('/employee-add','showform');
    Route::get('/employee-list','showlist');
    Route::get('/employee-option','provideOptions');
    Route::delete('/employee/destroy/{id}', 'destroy')->name('employee.delete');
    //for the profile
    Route::get('/profile','show');
    Route::put('/edit-employee','updateInfo');

});
Route::controller(LocationController::class)->middleware(['auth'])->group(function(){
    Route::get('/location','index');
    Route::post ('/location','store');
    Route::get('/location-option','provideOptions');
    Route::delete('/location/destroy/{id}','destroy');
});
Route::controller(TypeController::class)->middleware(['auth','admin'])->group(function(){
    Route::get('/type-option','provideOptions');
    Route::get('/jobs/type','index');
    Route::post ('/job-type','store');
});
Route::controller(TaskController::class)->middleware(['auth','admin'])->group(function(){
    Route::post('/job','store');
    Route::get('/jobs/list','index');
    //for the tasks
    //for the rooster
    Route::get('/taskCalender','taskCalender')->name('tasks.calen');
    Route::delete('/job/destroy/{key}','destroy');
});
Route::get('/jobs', function(){
    return Inertia::render('Jobs/Job');
})->middleware('auth');

Route::get('/payslip/unpaid',function(){
    return Inertia::render('Payslip/Unpaid/Unpaid.jsx');
})->middleware('auth');


//for both admin and employee

Route::controller(EmployeeController::class)->middleware(['auth'])->group(function(){
    //EmplyeeController
    Route::get('/get-profile','getProfile');
    Route::put('/edit-employee','updateInfo');

});

Route::controller(TaskController::class)->middleware(['auth'])->group(function(){
    Route::get('/tasks/completed','showCompletedTasks');
    Route::get('/completedTasksList/{key}','getCompletedTasksList');
    Route::get('/tasks/todo','showTodoTasks');
    Route::get('/roster','showRoster');
    Route::get('/todoTasksList/{key}','getTodoTasksList');
    Route::put('/markAsCompleted/{key}','markAsCompleted');
    Route::put('/markAsPaid/{key}','markAsPaid');
});
Route::controller(PaySlipController::class)->middleware(['auth'])->group(function(){
    Route::get('/getPaymentInfo','getInfo');
    Route::get('/getUnpaidList/{key}','getUnpaidList');
    Route::get('/getTodoPayList/{key}','getTodoList');
    Route::get('/getPaidList/{key}','getPaidList');
    Route::get('/payslip/todo','showTodo');
    Route::get('/payslip/paid','showPaid');
});
