<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Confession extends Model
{

    protected $fillable = ['content'];



    public function photos()
    {
        return $this->morphMany(Photo::class,'commentable');
    }


}
