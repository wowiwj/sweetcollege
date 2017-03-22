<?php

namespace App\Transformers;


use App\Models\City;
use App\Models\Major;
use App\Models\School;
use League\Fractal\TransformerAbstract;

class MajorsTransformer extends TransformerAbstract  {


    public function transform(Major $major)
    {
        return [
            'id' => $major->id,
            'name' => $major->name
        ];
    }



}