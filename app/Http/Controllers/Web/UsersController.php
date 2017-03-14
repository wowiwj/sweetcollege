<?php

namespace App\Http\Controllers\Web;


use App\Models\User;
use Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Naux\Mail\SendCloudTemplate;

class UsersController extends Controller
{


    public function index()
    {

        return view('users.index');
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name' => 'required|max:50',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|confirmed|min:6'

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);


        flash('验证邮件已发送到你的注册邮箱上，请注意查收。','important');


        return redirect('login');

    }


    public function show(User $user)
    {


        return view('users.show');

    }

    public function edit(User $user)
    {

        return view('users.edit',compact($user));
    }

}
