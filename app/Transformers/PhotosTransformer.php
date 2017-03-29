<?php

namespace App\Transformers;


use App\Models\Photo;

use League\Fractal\TransformerAbstract;

class PhotosTransformer extends TransformerAbstract  {


    public function transform(Photo $photo)
    {
        return [
            'name' => $photo->name,
            'path' => $photo->path,
            'thumbnail_path' => $photo->thumbnail_path
        ];
    }



}