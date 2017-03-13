<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Mail;
use Naux\Mail\SendCloudTemplate;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($user){
            $user->activation_token = str_random(30);
            $user->avatar = 'images/avatars/default/1.png';

            $user->sendVerifyEmail();

        });

    }

    public function sendVerifyEmail()
    {
        $user = $this;
        // 模板变量
        $bind_data = [
            'url' => route('email.verify',['token'=>$user->activation_token]),
            'name' => $user->name
        ];
        $template = new SendCloudTemplate('sweetcollege_app_register', $bind_data);

        Mail::raw($template, function ($message) use($user) {
            $message->from('sweetcollage@sweetcollege.cn', 'SweetCollege');

            $message->to($user->email);
        });


    }

}
