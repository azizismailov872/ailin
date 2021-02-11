<?php 

namespace App\Facades;

use Illuminate\Support\Facades\Facade;


class GenresService extends Facade
{
	protected static function getFacadeAccessor()
	{
		return 'GenresService';
	}
}