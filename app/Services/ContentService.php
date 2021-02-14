<?php 

namespace App\Services;

use App\Models\AudioBook\Genre\AudioBookGenre;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class ContentService
{
	public function getData($request,$uploadFile = 1)
	{	
		if($uploadFile == 1)
		{
			$data = $request->only('title','author','slug','description','ru_file_link','genre_id','status');
			$data['ru_file_link'] = null;
			if($data['genre_id'] == 0)
			{	
				$genre = AudioBookGenre::where('title','Без жанра')->first();

				if(!empty($genre))
				{
					$data['genre_id'] = $genre->id;
				}
			}

			return isset($data) ? $data : null;
		}
		else
		{
			$data = $request->only('title','author','slug','description','ru_file_link','genre_id','status');
			$data['ru_file'] = null;
			if($data['genre_id'] == 0)
			{	
				$genre = AudioBookGenre::where('title','Без жанра')->first();

				if(!empty($genre))
				{
					$data['genre_id'] = $genre->id;
				}
			}

			return isset($data) ? $data : null;
		}
	}


	public function getTrans($request,$uploadFile = 1)
	{
		if($uploadFile == 1)
		{
			$trans = $request->except([
				'title',
				'author',
				'slug',
				'genre_id',
				'status',
				'description',
				'uploadFile',
				'ru_file_link',
				'ru_file',
				'en_file',
				'kg_file',
				'kz_file',
				'uz_file',
				'tg_file',
			]);

			foreach ($trans as $key =>  $value) {
				if(preg_match("/^['ru','en','kg','kz','uz','tg']{0,2}_file_link$/um",$key))
				{
					$trans[$key] = null;
				}
			}

			return isset($trans) ? $trans : null;
		}
		else
		{
			$trans = $request->except([
				'title',
				'author',
				'slug',
				'genre_id',
				'status',
				'description',
				'uploadFile',
				'ru_file_link',
				'ru_file',
				'en_file',
				'kg_file',
				'kz_file',
				'uz_file',
				'tg_file',
			]);

			foreach ($trans as $key =>  $value) {
				if(preg_match("/^['en','kg','kz','uz','tg']{0,2}_file$/um",$key))
				{
					$trans[$key] = null;
				}
			}

			return isset($trans) ? $trans : null;
		}
	}

	public function saveFiles($files,$book)
	{
		if(!empty($book) && !empty($files))
		{
			$fileNames = [];

			$id = $book->id;

			foreach ($files as $key => $value) 
			{	
				if(preg_match("/^['ru','en','kg','kz','uz','tg']{0,2}/um",substr($key,0,2)))
				{	
					if(Storage::disk('books')->exists($id.'/'.substr($key,0,2)))
					{
						Storage::disk('books')->deleteDirectory($id.'/'.substr($key,0,2));
					}

					Storage::disk('books')->putFileAs($id.'/'.substr($key,0,2),$value,$value->getClientOriginalName(),'public');

					$fileNames[$key] = $value->getClientOriginalName();
				}
			}
			if(!empty($fileNames))
			{
				$book->trans()->update(Arr::except($fileNames, ['ru_file']));
				$book->update(['ru_file' => $fileNames['ru_file']]);
				return true;
			}
		}

		return null;
	}

	public function updateFiles($files,$model,$disk)
	{
		if(!empty($files) && !empty($model))
		{
			$fileNames = [];

			$id = $model->id;

			foreach($files as $key => $value)
			{	
				if(preg_match("/^['ru','en','kg','kz','uz','tg']{0,2}/um",substr($key,0,2)))
				{	
					if(Storage::disk($disk)->exists($id.'/'.substr($key,0,2)))
					{
						Storage::disk($disk)->deleteDirectory($id.'/'.substr($key,0,2));
					}

					Storage::disk($disk)->putFileAs($id.'/'.substr($key,0,2),$value,$value->getClientOriginalName());

					$fileNames[$key] = $value->getClientOriginalName();
				}
			}

			if(!empty($fileNames))
			{
				$model->trans()->update(Arr::except($fileNames, ['ru_file']));
				$model->update(['ru_file' => $fileNames['ru_file']]);
				return true;
			}
		}

		return null;
	}

	public function getFiles($request)
	{	
		if($request)
		{	
			$files = [];

			if($request->has('ru_file'))
			{
				$files['ru_file'] = $request->file('ru_file');
			}

			if($request->has('en_file'))
			{
				$files['en_file'] = $request->file('en_file');
			}

			if($request->has('kg_file'))
			{
				$files['kg_file'] = $request->file('kg_file');
			}

			if($request->has('kz_file'))
			{
				$files['kz_file'] = $request->file('kz_file');
			}

			if($request->has('uz_file'))
			{
				$files['uz_file'] = $request->file('uz_file');
			}

			if($request->has('tg_file'))
			{
				$files['tg_file'] = $request->file('tg_file');
			}

			return $files;
		}

		return null;
	}

	public function setFilesSize($model) 
	{
		if(!empty($model))
		{
			$model->hasFile = is_null($model->ru_file_link) ? true : false;

			if($model->hasFile)
			{
				$model->ru_file = [
					'name' => $model->ru_file,
					'size' => Storage::disk('books')->size($model->id.'/ru/'.$model->ru_file)
				];

				if(!empty($model->trans))
				{
					$trans = $model->trans;
					foreach($trans->getAttributes() as $key => $value)
					{	
						if(preg_match("/^[en','kg','kz','uz','tg']{0,2}_file/um",$key))
						{	
							if(isset($trans[$key]) && !empty($trans[$key]))
							{
								$trans[$key] = [
									'name' => $value,
									'size' => Storage::disk('books')->size($model->id.'/'.substr($key,0,2).'/'.$value)
								];
							}
						}
					}
					$model->trans = $trans;
				}
			}
		}

		return $model;
	}


	public function deleteDirectory($id,$disk)
	{
		if(!empty($id) && !empty($disk))
		{
			if(Storage::disk($disk)->exists($id))
			{
				Storage::disk($disk)->deleteDirectory($id);

				return true;
			}

			return null;
		}

		return null;
	}
}