<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(LessonsTableSeeder::class);
        $this->call(TagsTableSeeder::class);
//        $this->call(LessonTagtableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ConfessionsTableSeeder::class);
        $this->call(PhotosTableSeeder::class);
        $this->call(CitiesTableSeeder::class);
        $this->call(AcademiesTableSeeder::class);
        $this->call(MajorsTableSeeder::class);
        $this->call(SchoolsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
    }
}
