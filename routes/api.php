<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/employeeList' ,[EmployeeController::class,'getList']);
Route::get('/employeeSearch/{key}',[EmployeeController::class,'search']);


Route::get('/locationList',[LocationController::class,'getList']);
Route::get('/searchLocation/{key}',[LocationController::class,'search']);
