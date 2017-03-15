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
}