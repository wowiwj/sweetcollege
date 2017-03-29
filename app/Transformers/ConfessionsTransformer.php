<?php

namespace App\Transformers;


use App\Models\Confession;
use League\Fractal\TransformerAbstract;

class ConfessionsTransformer extends TransformerAbstract  {


    protected $defaultIncludes = [
        'user','photos'
    ];

    public function transform(Confession $confession)
    {
        return [
            'id' => $confession->id,
            'content' => $confession->content,
            'created_at' => $confession->created_at->toDateTimeString()
        ];
    }

    public function includeUser(Confession $confession)
    {

        $user = $confession->user;
        return $this->item($user, new UsersTransformer);
    }

    public function includePhotos(Confession $confession)
    {

        $photos = $confession->photos;
        return $this->collection($photos,new PhotosTransformer);

    }

}