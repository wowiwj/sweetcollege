<?php

namespace App\Http\Controllers\Api;

use App\Models\City;
use App\Transformers\CitiesTransformer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CitiesController extends ApiController
{
    public function index(Request $request)
    {
        $cities = City::where('name','like','%'.$request->query('q').'%')->get();

        return $this->respondWithCollection($cities,new CitiesTransformer());

    }
}
