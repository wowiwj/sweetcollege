<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'v1','namespace' => 'Api'],function (){
    Route::resource('lessons','LessonsController');

    Route::get('cities','CitiesController@index');

    Route::get('cities/{city}/schools','SchoolsController@index');


    Route::get('academies','AcademiesController@index');
    Route::get('academies/{academy}/majors','MajorsController@index');

    Route::resource('confessions','ConfessionsController');


});


