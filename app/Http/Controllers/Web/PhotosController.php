<?php

namespace App\Http\Controllers\Web;


use App\Models\Photo;
use App\Http\Controllers\Controller;
use App\Repositories\PhotoRepository;
use GuzzleHttp\Psr7\UploadedFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\SweetCollege\PhotosManager;

/**
 * Class PhotosController
 * @package App\Http\Controllers\Web
 */
class PhotosController extends Controller
{

    /**
     * @var PhotoRepository
     */
    protected $photo;

    /**
     * PhotosController constructor.
     * @param PhotoRepository $photo
     */
    public function __construct(PhotoRepository $photo)
    {
        $this->photo = $photo;
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * @param $name
     * @return string
     */
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
