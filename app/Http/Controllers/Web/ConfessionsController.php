<?php

namespace App\Http\Controllers\Web;

use App\Models\Confession;
use App\Models\Photo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class ConfessionsController extends Controller
{
    public function index()
    {
        $this->middleware('auth');

        return view('confessions.index');


    }

    public function show()
    {
        return view('confessions.index');
    }


    public function store(Request $request)
    {



        $content = $request->get('content');

        $confession = Auth::user()->confessions()->create([
            'content' => $content
        ]);

        if ($request->has('images')){

            $collection = collect($request->images);
            $collection->each(function ($item,$key) use ($confession){
                $photo = Photo::find($item);
                $confession->photos()->save($photo);
            });

        }

        return $confession->load('photos');

    }
}
