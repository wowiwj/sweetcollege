<?php

namespace App\Http\Controllers\Api;

use App\Models\Academy;
use App\Models\Major;
use App\Transformers\MajorsTransformer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MajorsController extends ApiController
{
    public function index(Academy $academy)
    {
        $majors = $academy->majors;
        return $this->respondWithCollection($majors,new MajorsTransformer());

    }
}
