<?php

namespace App\SweetCollege;

use Image;

class Thumbnail
{

    protected $width;
    protected $height;

    public function __construct($width=200,$height=200)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function make($src,$dest)
    {
        Image::make($src)
            ->fit($this->width,$this->height)
            ->save($dest);
    }

    public function makeWithPath($path)
    {
        return Image::make($path)->fit($this->width,$this->height);
    }

}