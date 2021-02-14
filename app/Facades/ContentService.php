<?php 

namespace App\Facades;

use Illuminate\Support\Facades\Facade;


class ContentService extends Facade
{
	protected static function getFacadeAccessor()
	{
		return 'ContentService';
	}
}