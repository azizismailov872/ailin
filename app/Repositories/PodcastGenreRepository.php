<?php 

namespace App\Repositories;

class PodcastGenreRepository
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

	public function one($id)
	{
		$genre = $this->model->where('id',$id)->with('trans')->first();
		if(isset($genre) && !empty($genre))
		{
			return $genre;
		}else 
		{
			return null;
		}
	}

	public function query()
	{
		return $this->model->query();
	}

	public function delete($id)
	{
		$this->model->destroy($id);
	}

	public function create($data,$trans)
	{
		if(!empty($data))
		{
			$genre = $this->model->create($data);

			if(!empty($trans))
			{
				$genre->trans()->create($trans);
			}

			return $genre;
		}

		return null;
	}

	public function update($id,$data,$trans)
	{
		if(!empty($id) && !empty($data))
		{
			$genre = $this->model->where('id',$id)->first(); 

			if(isset($genre) && !empty($genre))
			{
				$result = $genre->update($data);

				if(isset($trans) && !empty($trans))
				{
					if(is_null($genre->trans))
					{
						$genre->trans()->create($trans);
					}
					else
					{
						$genre->trans->update($trans);
					}
				}

				return $result;
			}

		}

		return null;
	}

	public function genresList()
	{
		$list = $this->model->select('id','title')->get()->toArray();

		return isset($list) ? $list : null;
	}

}