<?php

namespace App\SweetCollege;

use App\Models\Photo;
use Illuminate\Http\UploadedFile;

class PhotosManager
{
    protected $file;



    public function __construct(UploadedFile $file,Thumbnail $thumbnail = null)
    {
        $this->file = $file;
        $this->thumbnail = $thumbnail ?: new Thumbnail;
    }

    public static function make($path,$width,$height)
    {
        return (new Thumbnail())->makeImage($path,$width,$height);

    }


    public function store()
    {

        $photo = $this->makePhoto();

        $this->file->move($photo->baseDir(),$photo->name);

        $this->thumbnail->make($photo->path,$photo->thumbnail_path);
        return $photo;

    }

    public function storeAvatar()
    {
        $path = 'images/avatars';
        $name = $this->makeFileName();
        $this->file->move($path,$name);
        $this->thumbnail->make($path.'/'.$name,$path.'/'.$name);
        return '/'.$path.'/'.$name;
    }

    protected function makePhoto()
    {
        return new Photo([
            'name' => $this->makeFileName()
        ]);

    }

    protected function makeFileName()
    {
        $name = sha1(
            time().$this->file->getClientOriginalName()
        );

        $extension = $this->file->getClientOriginalExtension();
        return "{$name}.{$extension}";

    }

}