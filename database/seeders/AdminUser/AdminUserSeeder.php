<?php

namespace Database\Seeders\AdminUser;

use DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admin_users')->insert([
        	'email' => 'admin@gmail.com',
        	'name' => 'Администратор',
        	'photo' => 'default.png',
        	'phone' => '+996555555555',
        	'password' => Hash::make('123456'),
        	'created_at' => Carbon::now(),
        	'updated_at' => Carbon::now(),
        ]);
        DB::table('admin_users')->insert([
        	'email' => 'admin2@gmail.com',
        	'name' => 'Администратор',
        	'photo' => 'default.png',
        	'phone' => '+996555555555',
        	'password' => Hash::make('admin1234'),
        	'created_at' => Carbon::now(),
        	'updated_at' => Carbon::now(),
        ]);
        DB::table('admin_users')->insert([
        	'email' => 'admin3@gmail.com',
        	'name' => 'Администратор',
        	'photo' => 'default.png',
        	'phone' => '+996555555555',
        	'password' => Hash::make('123456789'),
        	'created_at' => Carbon::now(),
        	'updated_at' => Carbon::now(),
        ]);
    }
}
