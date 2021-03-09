<?php 

namespace App\Repositories;

use Illuminate\Support\Facades\Storage;

class PodcastRepository
{
	private $model;

	public function __construct($model)
	{
		$this->model = $model;
	}

	public function list($pageSize = 10)
	{
		return $this->model->orderByDesc('id')->paginate($pageSize);
	}

	public function query()
	{
		return $this->model->query();
	}

	public function listByGenre($pageSize = 10, $genre)
	{	
		return $this->model->whereHas('genre',function($q) use ($genre){
			$q->where('slug',"$genre");
		})->paginate($pageSize);
	}

	public function one($id,$with = null)
	{
		if($with)
		{
			return $this->model->where('id',$id)->with($with)->first();
		}
		else 
		{
			return $this->model->where('id',$id)->fist();
		}
	}

	public function create($data,$trans,$fileNames = null)
	{
		if(empty($fileNames))
		{	
			if(isset($data) && !empty($data))
			{
				$podcast = $this->model->create($data);

				if(isset($trans) && !empty($trans))
				{
					if(is_null($podcast->trans))
					{
						$podcast->trans()->create($trans);
					}
				}

				return $podcast;
			}
			return null;
		}
		elseif(isset($fileNames))
		{
			if(isset($data) && !empty($data))
			{
				if(array_key_exists('ru_file',$fileNames)){
					$data['ru_file'] = $fileNames['ru_file'];

					$podcast = $this->model->create($data);

					if(is_null($podcast->trans))
					{
						unset($fileNames['ru_file']);
						$transData = array_merge($trans,$fileNames);
						$podcast->trans()->create($transData);
					}
				}
				else
				{
					$podcast = $this->model->create($data);

					if(is_null($podcast->trans))
					{
						$transData = array_merge($trans,$fileNames);
						$podcast->trans()->create($transData);
					}
				}

				return $podcast;
			}

			return null;
		}
	}


	public function delete($id)
	{
		$model = $this->model->where('id',$id)->first();
		if(isset($model) && !empty($model))
		{
			if(Storage::disk('podcasts')->exists($model->id))
			{
				Storage::disk('podcasts')->deleteDirectory($model->id);
			}

			if($model->delete())
			{
				return true;
			}
			else
			{
				return false;
			}
		}


		return false;
	}

	public function update($id,$data,$trans,$fileNames = null)
	{
		$model = $this->model->where('id',$id)->first();

		if(!empty($model))
		{
			if(!empty($fileNames))
			{	
				if(array_key_exists('ru_file', $fileNames))
				{	
					$data['ru_file'] = $fileNames['ru_file'];
					if($model->update($data))
					{
						if(is_null($model->trans))
						{	
							unset($fileNames['ru_file']);
							$transData = array_merge($trans,$fileNames);
							$model->trans()->create($transData);
						}
						else
						{
							unset($fileNames['ru_file']);
							$transData = array_merge($trans,$fileNames);
							$model->trans->update($transData);
						}

						return $model;
					}
				}
				else
				{
					if($model->update($data))
					{
						if(is_null($model->trans))
						{	
							$transData = array_merge($trans,$fileNames);
							$model->trans()->create($transData);
						}
						else
						{
							$transData = array_merge($trans,$fileNames);
							$model->trans->update($transData);
						}

						return $model;
					}

					return null;
				}
			}
			else
			{
				if($model->update($data))
				{
					if(is_null($model->trans))
					{
						$model->trans()->create($trans);
					}
					else
					{
						$model->trans->update($trans);
					}

					return $model;
				}
				else
				{
					return null;
				}
			}
		}

		return null;
	}
}