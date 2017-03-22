<?php

namespace App\Transformers;


use App\Models\Academy;
use App\Models\City;
use App\Models\School;
use League\Fractal\TransformerAbstract;

class AcademiesTransformer extends TransformerAbstract  {


    public function transform(Academy $academy)
    {
        return [
            'id' => $academy->id,
            'name' => $academy->name
        ];
    }



}