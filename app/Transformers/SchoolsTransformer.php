<?php

namespace App\Transformers;


use App\Models\City;
use App\Models\School;
use League\Fractal\TransformerAbstract;

class SchoolsTransformer extends TransformerAbstract  {


    public function transform(School $school)
    {
        return [
            'id' => $school->id,
            'name' => $school->name
        ];
    }



}