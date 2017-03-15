<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;

class ConfessionsController extends Controller
{
    public function index()
    {
        return view('confessions.index');


    }

    public function show()
    {
        return view('confessions.index');
    }


    public function store(Request $request)
    {


        $arr = $request->file('file');

        //return $arr;

        return array_map(function ($item){

            return $item->move('public/avatar/user1');

        },$arr);

    }
}
