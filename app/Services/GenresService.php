<?php 

namespace App\Services;


class GenresService
{
	public function getData($request)
	{
		$data = $request->only([
			'title',
			'slug',
			'description',
			'status',
		]);

		if(isset($data) && !empty($data))
		{
			return $data;
		}

		return null;
	}

	public function getTrans($request)
	{
		$data = $request->except([
			'title',
			'slug',
			'description',
			'status',
		]);

		if(isset($data) && !empty($data))
		{
			return $data;
		}

		return null;
	}
}