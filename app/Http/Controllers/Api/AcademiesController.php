<?php

namespace App\Http\Controllers\Api;

use App\Models\Academy;
use App\Transformers\AcademiesTransformer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AcademiesController extends ApiController
{
    public function index()
    {
        $academies = Academy::all();
        return $this->respondWithCollection($academies,new AcademiesTransformer());


    }
}
