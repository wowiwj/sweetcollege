<?php

namespace App\Http\Controllers\Web;


use App\Models\Photo;
use App\Http\Controllers\Controller;
use App\Repositories\PhotoRepository;
use GuzzleHttp\Psr7\UploadedFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\SweetCollege\PhotosManager;

class PhotosController extends Controller
{

    protected $photo;

    public function __construct(PhotoRepository $photo)
    {
        $this->photo = $photo;
        $this->middleware('auth');
    }

    function upload(Request $request)
    {

        $file = $request->file('photo');

        $photo = (new PhotosManager($file))->store();
        $photo = $this->photo->save($photo->toArray());


        return response()->json([
            'id' => $photo->id,
            'name' => $photo->name
        ]);

    }

    function image($name)
    {
        $width = request()->get('width') ?? 200;
        $height = request()->get('height') ?? 200;



        $image = Photo::where('name',$name)->first();
        if (!$image){
            return '图片已删除';
        }

        $path = $image->path;
        $new = PhotosManager::make($path,$width,$height);

        return $new->response('jpg');

    }
}
