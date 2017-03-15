<?php

namespace App\Repositories;
use Illuminate\Support\Facades\Auth;

class PhotoRepository
{

    public function save(array $photo)
    {
        return Auth::user()->photos()->create([
            'path' => $photo['path'],
            'thumbnail_path' => $photo['thumbnail_path'],
            'name' => $photo['name']
        ]);

    }


}