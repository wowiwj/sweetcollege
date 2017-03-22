<?php

use Illuminate\Database\Seeder;

class AcademiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Academy::class,60)->create();
    }
}
