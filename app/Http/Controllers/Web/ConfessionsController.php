<?php

namespace App\Http\Controllers\Web;

use App\Models\Confession;
use App\Models\Photo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

/**
 * Class ConfessionsController
 * @package App\Http\Controllers\Web
 */
class ConfessionsController extends Controller
{

    /**
     * ConfessionsController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        $confessions = Confession::with('photos')->orderBy('created_at','desc')->paginate(15);
        //return $confessions;

        return view('confessions.index',compact('confessions'));


    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show()
    {


        return view('confessions.index');
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
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
        flash('添加成功','success');
        return back();

        return $confession->load('photos');

    }
}
