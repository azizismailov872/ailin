<?php 
namespace App\Repositories;

class RegisterApplicationRepository
{
	private $model;

	public function __construct($model)
	{
		$this->model = $model;
	}

	public function list($pageSize)
	{
		return $this->model->orderByDesc('created_at')->paginate($pageSize);
	}

	public function one($id)
	{
		$model = $this->model->where('id',$id)->first();

		return $model;
	}

	public function query()
	{
		return $this->model->query();
	}

	public function create($data)
	{
		if(!empty($data) && !is_null($data))
		{
			if(!empty($data['status']) && !is_null($data['status']))
			{
				if($data['status'] == 3)
				{
					$data['status'] = 0;
				}
			}
			else
			{
				$data['status'] = 0;
			}
			$model = $this->model->create($data);
			if(!is_null($model) && !empty($model))
			{
				return $model;
			}
			else
			{
				return null;
			}
		}

		return null;
	}

	public function update($id,$data)
	{
		if(!is_null($id) && !empty($data))
		{
			$model = $this->model->where('id',$id)->first();

			if(!is_null($model))
			{
				if($model->update($data))
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		}

		return false;
	}

	public function delete($id)
	{
		if(!is_null($id))
		{
			if($this->model->destroy($id))
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
}