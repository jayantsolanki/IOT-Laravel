<?php

use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
	User::create([
                'name' => 'Jayant Solanki',
                'email' => 'jayantjnp@gmail.com',
		'region' => 1,
		'role' => 'admin',
                'password' => bcrypt('secret'),
            ]);
    }
}
