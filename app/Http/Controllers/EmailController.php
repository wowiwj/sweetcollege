<?php

namespace App\Http\Controllers;

use App\Providers\AuthServiceProvider;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmailController extends Controller
{
    public function index()
    {

        return 'email';
    }

    public function verify($token)
    {

        $user = User::where('activation_token',$token)->first();

        if (is_null($user)){

            return back();

        }

        $user->activated = true;
        $user->activation_token = str_random(60);
        $user->save();

        Auth::login($user);


        return redirect('home');


    }
}
