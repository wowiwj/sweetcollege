<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = ['name'];

    public function city()
    {
        return $this->belongsTo(City::class);
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

}
