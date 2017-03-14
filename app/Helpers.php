<?php


function navIsActive($name)
{
    return Route::currentRouteName() == $name ? 'active' : '';
}