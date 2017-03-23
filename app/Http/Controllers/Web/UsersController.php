<?php

namespace App\Http\Controllers\Web;


use App\Models\Academy;
use App\Models\City;
use App\Models\Major;
use App\Models\School;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Naux\Mail\SendCloudTemplate;
use Prophecy\Argument\Token\AnyValuesToken;

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

    public function updateSchool(Request $request,User$user)
    {
        $this->authorize('update',$user);
        if ($request->has('school')) {
            // 添加学校
            $school = City::byIdOrName($request->city)
                            ->schoolWithIdOrName($request->school);
            Auth::user()->school()->associate($school);
        }


        if ($request->has('academy')){
            // 添加学院
            $major = Academy::byIdOrName($request->academy)
                                ->majorWithIdOrName($request->major);
            Auth::user()->major()->associate($major);

        }

        Auth::user()->enrollment_year = $request->enrollment_year;
        Auth::user()->save();

        flash('修改成功','success');
        return back();

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

        if ($request->has('city')){

            $city = City::byIdOrName($request->city);
            $user->city()->associate($city);
        }


        $user->update($data);
        $user->save();

        flash('用户资料更新成功','success');

        return back();

        return $data;


        return request()->all();
    }

}
