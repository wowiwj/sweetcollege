<?php

namespace App\SweetCollege;

use Image;

class Thumbnail
{
    public function make($src,$dest)
    {
        Image::make($src)
            ->fit(200)
            ->save($dest);
    }

    public function makeImage($path,$width,$height)
    {
        return Image::make($path)->fit($width,$height);
    }

}