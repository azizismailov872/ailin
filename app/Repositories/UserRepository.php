<?php

namespace App\Repositories;

class UserRepository
{
	protected $model;

	public function __construct($model)
	{
		$this->model = $model;
	}

	public function list($pageSize)
	{
		$list = $this->model->orderByDesc('id')->paginate($pageSize);

		return isset($list) ? $list : null; 
	}

	public function one($id)
	{
		$user = $this->model->where('id',$id)->first();

		return !is_null($user) ? $user : null;
	}

	public function query()
	{
		return $this->model->query();
	}

	public function create($data)
	{
		if(!is_null($data) && !empty($data))
		{	
			$user = $this->model->create($data);
			if(!empty($user))
			{
				return $user;
			}
			else
			{
				return null;
			}
		}
	}

	public function update($id,$data)
	{
		if(isset($id) && isset($data))
		{
			$user = $this->model->where('id',$id)->first();
			if(!is_null($user))
			{
				if($user->update($data))
				{
					return $user;
				}
				else 
				{
					return null;
				}
			}
		}
		return null;
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
