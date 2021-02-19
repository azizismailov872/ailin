<?php

namespace Database\Seeders\User;

use DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
        	'name' => 'Администратор',
            'surname' => 'Фамилия',
        	'phone' => '+996555555555',
        	'created_at' => Carbon::now(),
        	'updated_at' => Carbon::now(),
        ]);
        DB::table('users')->insert([
        	'name' => 'Администратор 2',
            'surname' => 'Фамилия 2',
        	'phone' => '+996555444333',
        	'created_at' => Carbon::now(),
        	'updated_at' => Carbon::now(),
        ]);
    }
}
