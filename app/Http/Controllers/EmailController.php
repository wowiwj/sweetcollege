<?php

namespace App\Http\Controllers;

use App\Providers\AuthServiceProvider;
use App\Models\User;
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

            flash('验证token失败', 'danger');
            return back();

        }

        $user->activated = true;
        $user->activation_token = null;
        $user->save();
        flash('欢迎回来','success');

        Auth::login($user);


        return redirect('home');


    }
}
