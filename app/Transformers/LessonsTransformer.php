<?php

namespace App\Transformers;


use App\Models\Lesson;
use League\Fractal\TransformerAbstract;

class LessonsTransformer extends TransformerAbstract  {


    public function transform(Lesson $lesson)
    {
        return [
            'title' => $lesson->title,
            'content' => $lesson->body,
            'is_free' => (boolean) $lesson->free

        ];
    }



}