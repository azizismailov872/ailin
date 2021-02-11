<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        //\App\Models\AdminUser\AdminUser::factory(20)->create();
        //\App\Models\AudioBook\Genre\AudioBookGenre::factory(25)->create();
        \App\Models\Podcast\Genre\PodcastGenre::factory(25)->create();
        \App\Models\Training\Genre\TrainingGenre::factory(25)->create();
       //$this->call('Database\Seeders\AdminUser\AdminUserSeeder');
    }
}
