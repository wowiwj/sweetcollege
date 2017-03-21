<?php

namespace App\Transformers;


use App\Models\City;
use League\Fractal\TransformerAbstract;

class CitiesTransformer extends TransformerAbstract  {


    public function transform(City $city)
    {
        return [
            'id' => $city->id,
            'name' => $city->name
        ];
    }



}