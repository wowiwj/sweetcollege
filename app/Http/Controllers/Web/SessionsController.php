<?php

namespace App\Http\Controllers\Web;


use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SessionsController extends Controller
{


    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|max:255',
            'password' => 'required'
        ]);

        $credentials = [
            'email'    => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials,$request->has('remember'))) {


            if (Auth::user()->activated) {
                flash('尊敬的'.Auth::user()->name.',欢迎回来', 'success');
                return redirect()->route('users.show',['id'=>Auth::user()->id]);
                //return redirect()->intended(route("users.show", [Auth::user()]));
            }else{
                Auth::logout();
                flash('你的账号未激活，请检查邮箱中的注册邮件进行激活。','important');

                return back();
            }


        } else {
            flash('很抱歉，您的邮箱和密码不匹配','danger');
            return redirect()->back();
        }



    }

}
