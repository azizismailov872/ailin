<?php 

namespace App\Services;

use App\Models\AudioBook\Genre\AudioBookGenre;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class ContentService
{	

	public const UPLOAD_AS_FILE = 'file';

	public const UPLOAD_AS_LINK = 'link';

	public function getData($requestData,$uploadFile)
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
				$data['genre_id'] = AudioBookGenre::where('title','Без жанра')->first()->id;
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
				$data['genre_id'] = AudioBookGenre::where('title','Без жанра')->first()->id;
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
				$model['ru_file'] = [
					'name' => $model->ru_file ,
					'size' => Storage::disk($disk)->size($model->id.'/ru/'.$model->ru_file),
				];
				$model['hasFile'] = true;
				$trans = $model->trans;
				if(!is_null($trans))
				{	
					$matches = ['en_file','kg_file','kz_file','uz_file','tg_file'];

					foreach ($trans->getAttributes() as $key => $value) {
						if(in_array($key,$matches))
						{
							if(!empty($trans[$key]))
							{
								$trans[$key] = [
									'name' => $value,
									'size' => Storage::disk($disk)->size($model->id.'/'.substr($key,0,2).'/'.$value)
								];
							}
						}	
					}

					$model->trans = $trans;
				}
			}
			else
			{
				$model['hasFile'] = false;
			}

			return $model;
		}

		return null;
	}

	public function deleteDirectory($path,$disk)
	{
		return Storage::disk($disk)->deleteDirectory($path);
	}	
}