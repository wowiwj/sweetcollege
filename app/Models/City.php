<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = ['name'];

    public function schools(){

        return $this->hasMany(School::class);

    }

    public function users()
    {
        return $this->hasMany(User::class);
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

    public function schoolWithIdOrName($value)
    {
        if (is_numeric($value)){
            return static::find($value);
        }


        return $this->schools()->firstOrCreate([
            'name' => $value
        ]);
    }

}
