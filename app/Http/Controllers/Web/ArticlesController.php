<?php

namespace App\Http\Controllers\Web;

use App\SweetCollege\PhotosManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\ImageManager;

class ArticlesController extends Controller
{
    public function index()
    {

        return view('articles.index');

    }


    public function edit()
    {
        return view('articles.edit');
    }


    public function create()
    {
        return view('articles.create');
    }


    public function store(Request $request)
    {
        $this->validate($request,[
            'title' => 'required|min:6|max:255',
            'content' => 'required',
        ]);


        $filePath = null;

        if ($request->hasFile('pageImage'))
        {
            $file = $request->file('pageImage');

            $filePath = (new PhotosManager($file))->makeImage($file,300,200);

        }

        Auth::user()->articles()->create([
            'title' => $request->title,
            'content' => $request->get('editormd_id-html-code'),
            'md_content' => $request->get('content'),
            'page_image' => $filePath

        ]);

        flash('发表成功','success');

        return back();

    }

}
