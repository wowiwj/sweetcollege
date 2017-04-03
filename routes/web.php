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
    return view('index');
});


Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/test', function (){
    return view('welcome');
});


Route::group(['namespace' => 'Web'], function () {

    Route::resource('users','UsersController');
    Route::get('users/{user}/school_edit','UsersController@schoolEdit')->name('users.school_edit');
    Route::patch('users/{user}/school_update','UsersController@updateSchool')->name('users.update_school');

    //aditAvatar
    Route::get('users/{user}/avatar_edit','UsersController@aditAvatar')->name('users.adit_avatar');
    Route::patch('users/{user}/avatar_update','UsersController@updateAvatar')->name('users.update_avatar');

    Route::post('register','UsersController@store');

    Route::post('login','SessionsController@store');

    Route::resource('confessions','ConfessionsController');

    Route::post('photos','PhotosController@upload')->name('photos.upload');
    Route::get('image/{name}','PhotosController@image')->name('photos.show');


    Route::resource('tasks','TasksController');

    Route::resource('articles','ArticlesController');

});



Route::get('email/verify/{token}',['as'=>'email.verify','uses'=>'EmailController@verify']);

