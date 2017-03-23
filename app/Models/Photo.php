<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{

    protected $fillable = ['name','path','thumbnail_path'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function commentable()
    {
        return $this->morphTo();
    }

    public function baseDir()
    {
        return "images/photos";
    }

    public function setNameAttribute($name)
    {
        $this->attributes['name'] = $name;

        $this->path = $this->baseDir()."/".$name;

        $this->thumbnail_path = $this->baseDir().'/tn-'.$name;

    }


    public static function boot()
    {
        parent::boot();

        static::creating(function($photo){
//            $photo->user_id

        });
    }
}
