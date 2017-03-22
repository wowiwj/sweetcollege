<?php

namespace App\Http\Controllers\Api;

use App\Models\City;
use App\Transformers\SchoolsTransformer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SchoolsController extends ApiController
{
    public function index(City $city)
    {
        $schools = $city->schools;

        return $this->respondWithCollection($schools,new SchoolsTransformer());

    }
}
