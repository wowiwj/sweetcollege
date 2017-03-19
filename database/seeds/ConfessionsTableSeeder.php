<?php

use Illuminate\Database\Seeder;

class ConfessionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Confession::class,60)->create();
    }
}
