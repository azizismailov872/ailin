<?php 

namespace App\Facades;

use Illuminate\Support\Facades\Facade;


class AdminUserService extends Facade
{
	protected static function getFacadeAccessor()
	{
		return 'AdminUserService';
	}
}