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


    public static function byIdOrName($value)
    {
        if (is_numeric($value)){
            return static::find($value);
        }

        return static::firstOrCreate([
            'name' => $value
        ]);
    }

    public function majorWithIdOrName($value)
    {
        if (is_numeric($value)){
            return static::find($value);
        }


        return $this->majors()->firstOrCreate([
            'name' => $value
        ]);
    }

}
