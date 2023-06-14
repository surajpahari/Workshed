<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ClientController;

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

Route::get('/', function () {
    return Inertia::render('Test');
});
Route::get('/login',function(){
    return Inertia::render('Login');
});
Route::post('/signup', [ClientController::class,'create']);

Route::get('/god',function(){
    return Inertia::render('Maker');
});
Route::get('/show',[ClientController::class,'show']);
Route::post('/request',[ClientController::class,'accept']);
