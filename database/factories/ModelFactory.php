<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'activated' => 1,
        'avatar' => $faker->imageUrl(200,200),
    ];
});

$factory->define(App\Models\Lesson::class, function (Faker\Generator $faker) {

    return [
        'title' => $faker->sentence,
        'body' => $faker->paragraph,
        'free' => $faker->boolean
        
    ];
});

$factory->define(App\Models\Confession::class, function (Faker\Generator $faker) {

    $user_ids = App\Models\User::pluck('id')->random();

    return [
        'user_id' => $user_ids,
        'content' => $faker->sentence(),

    ];
});

$factory->define(App\Models\Photo::class, function (Faker\Generator $faker) {

    $user_ids = App\Models\User::pluck('id')->random();

    $confession_ids = App\Models\Confession::pluck('id')->random();
    $types = ['App\Models\Confession'];
    return [
        'user_id' => $user_ids,
        'name' => $faker->sentence,
        'path' => $faker->imageUrl(),
        'thumbnail_path' => $faker->imageUrl(200,200),
        'commentable_type'    => $types[0],
        'commentable_id'      => $confession_ids,

    ];
});





$factory->define(App\Models\Tag::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->sentence
    ];
});





