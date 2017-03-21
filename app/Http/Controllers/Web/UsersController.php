<?php

namespace App\Http\Controllers\Web;


use App\Models\User;
use Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Naux\Mail\SendCloudTemplate;

/**
 * Class UsersController
 * @package App\Http\Controllers\Web
 */
class UsersController extends Controller
{


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        return view('users.index');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
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
        $user->sendVerifyEmail();


        flash('验证邮件已发送到你的注册邮箱上，请注意查收。','important');


        return redirect('login');

    }


    /**
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(User $user)
    {


        return view('users.show');

    }

    /**
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(User $user)
    {

        $this->authorize('update',$user);

        return view('users.edit',compact('user'));
    }

    /**
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function schoolEdit(User $user)
    {
//        return $user;
        $this->authorize('update',$user);
        return view('users.edit_school',compact('user'));

    }

    /**
     * @param Request $request
     * @param User $user
     * @return array|\Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, User $user)
    {

        $this->authorize('update',$user);

        $data = array_filter([
            'gender' => $request->gender,
            'real_name' => $request->real_name,
            'city' => $request->city,
            'introduction' => $request->introduction
        ]);

        $user->update($data);
        $user->save();

        flash('用户资料更新成功','success');

        return back();

        return $data;


        return request()->all();
    }

}
