<?php 

namespace App\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class ContentService
{	

	public const UPLOAD_AS_FILE = 'file';

	public const UPLOAD_AS_LINK = 'link';

	public function getData($requestData,$uploadFile,$defaultGenreId)
	{	
		if($uploadFile === self::UPLOAD_AS_LINK)
		{
			$data = Arr::only($requestData,[
				'title',
				'slug',
				'description',
				'genre_id',
				'status',
				'author',
				'ru_file_link'
			]);
			$data['ru_file'] = null;
			if($data['genre_id'] == 0)
			{
				$data['genre_id'] = $defaultGenreId;
			}

			return $data;
		}
		elseif($uploadFile === self::UPLOAD_AS_FILE)
		{
			$data = Arr::only($requestData,[
				'title',
				'slug',
				'description',
				'genre_id',
				'status',
				'author',
			]);
			$data['ru_file_link'] = null;
			if($data['genre_id'] == 0)
			{
				$data['genre_id'] = $defaultGenreId;
			}

			return $data;
		}

		return null;
	}


	public function getTrans($requestData,$uploadFile)
	{
		if($uploadFile === self::UPLOAD_AS_LINK)
		{
			$data = Arr::only($requestData,[
				'en_title',
				'en_description',
				'en_file_link',
				'kg_title',
				'kg_description',
				'kg_file_link',
				'kz_title',
				'kz_description',
				'kz_file_link',
				'uz_title',
				'uz_description',
				'uz_file_link',
				'tg_title',
				'tg_description',
				'tg_file_link',
			]);
			$data['en_file'] = null;
			$data['kg_file'] = null;
			$data['kz_file'] = null;
			$data['uz_file'] = null;
			$data['tg_file'] = null;
			return $data;
		}
		elseif($uploadFile === self::UPLOAD_AS_FILE)
		{
			$data = Arr::only($requestData,[
				'en_title',
				'en_description',
				'kg_title',
				'kg_description',
				'kz_title',
				'kz_description',
				'uz_title',
				'uz_description',
				'tg_title',
				'tg_description',
			]);
			$data['en_file_link'] = null;
			$data['kg_file_link'] = null;
			$data['kz_file_link'] = null;
			$data['uz_file_link'] = null;
			$data['tg_file_link'] = null;

			return $data;
		}
	}

	public function getFileNames($files)
	{	
		$matches = ['kg_file','en_file','kz_file','uz_file','tg_file','ru_file'];

		$fileNames = [];

		foreach($files as $key => $value)
		{	
			if(in_array($key,$matches))
			{
				$fileNames[$key] = $value->getClientOriginalName();
			}
		}

		return isset($fileNames) ? $fileNames : null;
	}

	public function saveFiles($files,$id,$disk)
	{		
		$matches = ['kg_file','en_file','kz_file','uz_file','tg_file','ru_file'];
		if(isset($files) && !empty($files))
		{
			foreach ($files as $key => $value) {
				if(in_array($key,$matches))
				{	
					$locale = substr($key,0,2);

					if(Storage::disk($disk)->exists($id.'/'.$locale.'/'))
					{
						Storage::disk($disk)->deleteDirectory($id.'/'.$locale);
					}

					if(is_null(Storage::disk($disk)->putFileAs($id.'/'.$locale,$value,$value->getClientOriginalName())))
					{
						return false;
					}
				}
			}
			return true;
		}
		return null;
	}

	public function setFilesSize($model,$disk)
	{
		if(!empty($model))
		{
			if(!is_null($model->ru_file))
			{
				if(Storage::disk($disk)->exists($model->id.'/ru/'.$model->ru_file))
				{
					$model['ru_file'] = [
						'name' => $model->ru_file ,
						'size' => Storage::disk($disk)->size($model->id.'/ru/'.$model->ru_file),
					];
					$model['hasFile'] = true;
				}
				else
				{
					$model['hasFile'] = false;
				}
			}
			$trans = $model->trans;
			if(!is_null($trans))
			{	
				$matches = ['en_file','kg_file','kz_file','uz_file','tg_file'];

				foreach ($trans->getAttributes() as $key => $value) {
					if(in_array($key,$matches))
					{
						if(!empty($trans[$key]))
						{
							if(Storage::disk($disk)->exists($model->id.'/'.substr($key,0,2).'/'.$value))
							{	
								$model['hasFile'] = true;
								$trans[$key] = [
									'name' => $value,
									'size' => Storage::disk($disk)->size($model->id.'/'.substr($key,0,2).'/'.$value)
								];
							}
						}
					}
				}

				$model->trans = $trans;
			}

			return $model;
		}

		return null;
	}

	public function getVideoLinks($requestData)
	{
		$data = Arr::only($requestData,[
			'ru_video_link',
			'en_video_link',
			'kg_video_link',
			'kz_video_link',
			'uz_video_link',
			'tg_video_link',
		]);
		$data['ru_video'] = null;
		$data['en_video'] = null;
		$data['kg_video'] = null;
		$data['kz_video'] = null;
		$data['uz_video'] = null;
		$data['tg_video'] = null;

		return $data;
	}

	public function getVideoNames($files)
	{	
		$matches = ['ru_video','kg_video','kz_video','en_video','tg_video','uz_video'];

		$fileNames = [];
		if(!empty($files))
		{	
			foreach ($files as $key => $value) {
				if(in_array($key,$matches))
				{
					$fileNames[$key] = $value->getClientOriginalName();
				}
			}
			$fileNames['ru_video_link'] = null;
			$fileNames['en_video_link'] = null;
			$fileNames['kg_video_link'] = null;
			$fileNames['kz_video_link'] = null;
			$fileNames['uz_video_link'] = null;
			$fileNames['tg_video_link'] = null;

			return !empty($fileNames) ? $fileNames : null;
		}

		return null;
	}

	public function saveVideos($id,$files)
	{
		if(!empty($id) && !empty($files))
		{	
			$matches = ['ru_video','kg_video','kz_video','en_video','tg_video','uz_video'];
			foreach ($files as $key => $value) {

				$locale = substr($key,0,2);

				if(in_array($key,$matches))
				{
					if(Storage::disk('trainings')->exists($id.'/videos/'.$locale))
					{
						Storage::disk('trainings')->deleteDirectory($id.'/videos/'.$locale);
					}

					if(is_null(Storage::disk('trainings')->putFileAs($id.'/videos/'.$locale,$value,$value->getClientOriginalName())))
					{
						return null;
					}
				}
			}

			return true;
		}

		return null;
	}

	public function setVideosSize($model,$disk)
	{
		if(!empty($model))
		{
			if(!is_null($model->video) && !is_null($model->video->ru_video))
			{	
				$matches = ['ru_video','en_video','kg_video','kz_video','uz_video','tg_video'];
				$model['hasVideo'] = true;
				foreach ($model->video->getAttributes() as $key => $value) {
					if(in_array($key,$matches))
					{
						if(!is_null($value))
						{	
							$locale = substr($key,0,2);
							if(Storage::disk($disk)->exists($model->id.'/videos/'.$locale.'/'.$value))
							{
								$model[$key] = [
									'name' => $value,
									'size' => Storage::disk($disk)->size($model->id.'/videos/'.$locale.'/'.$value)
								];
							}
						}
					}
				}
				return $model;
			}	
			else
			{
				$model['hasVideo'] = false;
			}
		}

		return $model;
	}

	public function setImageSize($model,$disk)
	{
		if(!empty($model))
		{
			if(!is_null($model->photo) && $model->photo !== 'default.png')
			{
				if(Storage::disk($disk)->exists($model->id.'/'.$model->photo))
				{
					$model->photo = [
						'name' => $model->photo,
						'size' => Storage::disk($disk)->size($model->id.'/'.$model->photo)
					];
				}
			}

			return $model;
		}

		return null;
	}

	public function deleteDirectory($path,$disk)
	{
		return Storage::disk($disk)->deleteDirectory($path);
	}
	
	public function uploadImage($id,$image,$disk)
	{
		if(!empty($image) && !is_null($image))
		{	
			$imageName = $image->getClientOriginalName();

			if(Storage::disk($disk)->exists($id))
			{
				Storage::disk($disk)->deleteDirectory($id);
			}

			if(!Storage::disk($disk)->putFileAs($id,$image,$imageName))
			{
				return false;
			}

			return $imageName;
		}

		return false;
	}
}