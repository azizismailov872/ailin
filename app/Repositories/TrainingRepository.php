<?php 

namespace App\Repositories;

use Illuminate\Support\Facades\Storage;

class TrainingRepository
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

	public function one($id,$with)
	{
		if(!empty($with))
		{
			return $this->model->where('id',$id)->with($with)->first();
		}
		else
		{
			return $this->model->where('id',$id)->first();
		}
	}

	public function listByGenre($pageSize = 10, $genre)
	{	
		return $this->model->whereHas('genre',function($q) use ($genre){
			$q->where('slug',"$genre");
		})->paginate($pageSize);
	}

	public function create($data,$trans,$fileNames = null)
	{
		if(empty($fileNames))
		{	
			if(isset($data) && !empty($data))
			{
				$training = $this->model->create($data);

				if(isset($trans) && !empty($trans))
				{
					if(is_null($training->trans))
					{
						$training->trans()->create($trans);
					}
				}

				return $training;
			}
			return null;
		}
		elseif(isset($fileNames))
		{
			if(isset($data) && !empty($data))
			{
				if(array_key_exists('ru_file',$fileNames)){
					$data['ru_file'] = $fileNames['ru_file'];

					$training= $this->model->create($data);

					if(is_null($training->trans))
					{
						unset($fileNames['ru_file']);
						$transData = array_merge($trans,$fileNames);
						$training->trans()->create($transData);
					}
				}
				else
				{
					$training = $this->model->create($data);

					if(is_null($training->trans))
					{
						$transData = array_merge($trans,$fileNames);
						$training->trans()->create($transData);
					}
				}

				return $training;
			}

			return null;
		}
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

	public function updateVideo($id,$data)
	{
		if(!empty($id) && !empty($data))
		{
			$model = $this->model->where('id',$id)->first();

			if(!empty($model->video))
			{
				$model->video->update($data);
			}
			else
			{
				$model->video()->create($data);
			}

			return $model;
		}

		return null;
	}

	public function delete($id)
	{
		$model = $this->model->where('id',$id)->first();
		if(isset($model) && !empty($model))
		{
			if(Storage::disk('trainings')->exists($model->id))
			{
				Storage::disk('trainings')->deleteDirectory($model->id);
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


	public function query()
	{
		return $this->model->query();
	}
}