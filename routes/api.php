<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
//
//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');

Route::get('/', function () {
    return "Builder API";
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register'])->middleware('auth:sanctum');
Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.update');
Route::apiResource('users', UserController::class)->middleware('auth:sanctum');

//Route::get('/test-email', function () {
//    Mail::raw('This is a test email', function ($message) {
//        $message->to('perezguedesmaikel@gmail.com')
//            ->subject('Test Email');
//    });
//
//    return 'Email sent to perezguedesmaikel@gmail.com';
//});


