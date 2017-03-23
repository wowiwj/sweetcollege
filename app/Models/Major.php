<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Major
 * @package App\Models
 */
class Major extends Model
{

    /**
     * @var array
     */
    protected $fillable = ['name'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function academy()
    {
        return $this->belongsTo(Academy::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
