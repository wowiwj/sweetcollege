<?php

namespace App\Http\Controllers\Api;

use App\Models\Confession;
use App\Transformers\ConfessionsTransformer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class ConfessionsController extends ApiController
{
    public function index()
    {


        $limit = Input::get('limit') ?: 15;
        $confessions = Confession::latest()->paginate($limit);

        return $this->respondWithPaginator($confessions,new ConfessionsTransformer);

    }
}
