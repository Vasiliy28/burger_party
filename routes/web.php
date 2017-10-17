<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/app', function () {
  return view('app');
});

Route::get('/json', function () {
  $response_array = array(
    'name1' => 'valie1',
    'name2' => 'valie2',
    'name3' => 'valie3',
  );
  return response()->json($response_array);
});