<?php

namespace App\Transformers;


use App\Models\School;
use App\Models\User;
use League\Fractal\TransformerAbstract;

class UsersTransformer extends TransformerAbstract  {


    public function transform(User $user)
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar,
            'gender' => $user->gender,
            'city' => $user->city ? $user->city->name : null,
        ];
    }



}