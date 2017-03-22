<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Academy extends Model
{
    protected $fillable = ['name'];

    public function majors()
    {
        return $this->hasMany(Major::class);
    }


}
