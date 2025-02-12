<?php

use App\Helpers\ResponseHelper;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login',function () {
    return ResponseHelper::returnResponse(401, 'No tienes autorización');
})->name('login');
//Route::post('/login', function () {
//    return "login";
//});
