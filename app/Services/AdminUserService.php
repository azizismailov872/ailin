<?php 

namespace App\Services;

use Auth;
use App\Models\User;
use App\Models\AdminUser\AdminUser;

class AdminUserService
{
	public function login($email,$password,$rememberMe)
	{
		$auth = Auth::guard('admin')->attempt([
			'email' => $email,
			'password' => $password,
		],$rememberMe);

		return $auth ? $this->getUser() : null;
	}

	public function getUser()
	{
		$user = Auth::guard('admin')->user()->only([
			'id',
            'name',
            'email',
            'surname',
            'photo',
            'phone'
		]);

		return $user ? $user : null;
	}

	public function auth()
	{	
		if(Auth::guard('admin')->check())
		{
			return $this->getUser();
		}
		else
		{
			return null;
		}
	}
}