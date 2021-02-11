<?php 

namespace App\Services;

use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

class ResponseFormat
{
	public function withErrors($messages,$code)
	{
		if(isset($messages) && !empty($messages))
		{
			$response = new JsonResponse([
				'status' => 0,
				'errors' => $messages,
			],$code);

			return $response;
		}

		return null;
	}

	public function withError($error,$code) 
	{
		if(isset($error) && !empty($error) && is_string($error))
		{
			$response = new JsonResponse([
				'status' => 0,
				'message' => $error,
			],$code);

			return $response;
		}

		return null;
	}

	public function success($data,$key,$code)
	{
		if(isset($data) && !empty($data))
		{
			$response = new JsonResponse([
				'status' => 1,
				$key => $data,
				'errors' => null
			],$code);

			return $response;
		}

		return null;
	}
}