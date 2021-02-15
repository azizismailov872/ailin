<?php 

namespace App\Repositories;

use Illuminate\Support\Facades\Storage;

class AudioBookRepository
{
	private $model;

	public function __construct($model)
	{
		$this->model = $model;
	}

	public function make($data)
	{
		$model = $this->model->make($data);

		return $model;
	}


	public function create($data,$trans,$fileNames = null)
	{
		if(empty($fileNames))
		{	
			if(isset($data) && !empty($data))
			{
				$book = $this->model->create($data);

				if(isset($trans) && !empty($trans))
				{
					if(is_null($book->trans))
					{
						$book->trans()->create($trans);
					}
				}

				return $book;
			}
			return null;
		}
		elseif(isset($fileNames))
		{
			if(isset($data) && !empty($data))
			{
				if(array_key_exists('ru_file',$fileNames)){
					$data['ru_file'] = $fileNames['ru_file'];

					$book = $this->model->create($data);

					if(is_null($book->trans))
					{
						unset($fileNames['ru_file']);
						$transData = array_merge($trans,$fileNames);
						$book->trans()->create($transData);
					}
				}
				else
				{
					$book = $this->model->create($data);

					if(is_null($book->trans))
					{
						$transData = array_merge($trans,$fileNames);
						$book->trans()->create($transData);
					}
				}

				return $book;
			}

			return null;
		}
	}

	public function list($pageSize = 10, $orderBy = 'id')
	{
		return $this->model->orderByDesc($orderBy)->paginate($pageSize);
	}

	public function query()
	{
		return $this->model->query();
	}

	public function one($id, $with = null)
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

	public function find($where,$with = 'trans')
	{
		if($where){
			return $this->model->where($where)->with($with)->first();
		}else
		{
			return null;
		}
	}

	public function delete($id)
	{
		$model = $this->model->where('id',$id)->first();
		if(isset($model) && !empty($model))
		{
			if(Storage::disk('books')->exists($model->id))
			{
				Storage::disk('books')->deleteDirectory($model->id);
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