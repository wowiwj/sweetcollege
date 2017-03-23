<?php

namespace App\Models;

use App\Notifications\ResetPassword;
use App\Notifications\SendActivatedEmail;
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
        'name',
        'email',
        'password',
        'gender',
        'real_name',
        'city_id',
        'introduction',
        'school_id',
        'major_id',
        'enrollment_year'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }

    public function confessions(){

        return $this->hasMany(Confession::class);
    }


    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function major()
    {
        return $this->belongsTo(Major::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }


    public static function boot()
    {
        parent::boot();

        static::creating(function ($user){
            $user->activation_token = str_random(30);
            $user->avatar = 'images/avatars/default/1.png';
        });

    }



    public function sendVerifyEmail()
    {
        $this->notify(new SendActivatedEmail($this));
    }

    function  sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

}
