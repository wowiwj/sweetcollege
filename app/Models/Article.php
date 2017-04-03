<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $fillable = [
        'title',
        'content',
        'md_content',
        'page_image',
        'view_count',
        'published_at'
    ];


    public function author(){

        return $this->belongsTo(User::class);

    }





}
