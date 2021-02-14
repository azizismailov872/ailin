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

	public function create($data,$trans,$files = null)
	{
		if(empty($files))
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
	}

	public function list($pageSize = 10)
	{
		return $this->model->orderByDesc('id')->paginate($pageSize);
	}

	public function query()
	{
		return $this->model->query();
	}

	public function one($id)
	{
		return $this->model->where('id',$id)->with('trans')->first();
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

	public function update($id,$data,$trans)
	{
		$model = $this->model->where('id',$id)->first();

		if(!empty($model))
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

		return null;
	}
}