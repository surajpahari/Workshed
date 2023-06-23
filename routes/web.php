<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

//Welcome Page
Route::get('/', function () {
    return Inertia::render('Welcome');
});


//User Singnup and creation
Route::get('/signup', function () {
    return Inertia::render('User/SignUp');
});
Route::get('/signin', function () {
    return Inertia::render('User/SignIn');
});
Route::post('/signup',[UserController::class,'createUser']);


//For built in login functioanliy
Auth::routes();

//UserDashbord
/* Route::group(['middleware'=>['auth']],function(){ */
/*     Route::get('/home',[UserController::class,"test"]); */
/* } */
/* ); */

Route::get('/dashboard',function(){
    return Inertia::render("Dashboard");
})->middleware('auth');





