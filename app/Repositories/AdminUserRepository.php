<?php 
namespace App\Repositories;

use Arr;
use Illuminate\Support\Facades\Hash;

class AdminUserRepository
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

		if(!empty($model) && !is_null($model))
		{
			$model = Arr::except($model,[
				'password',
				'remember_token',
				'created_at',
				'updated_at'
			]);

			return $model;
		}
		else
		{
			return null;
		}

	}

	public function query()
	{
		return $this->model->query();
	}

	public function create($data)
	{
		if(!is_null($data) && !empty($data))
		{	
			if(!empty($data['password']) && !is_null($data['password']))
			{
				$data['password'] = Hash::make($data['password']);
			}
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
			if(!empty($data['password']) && !is_null($data['password']))
			{
				$data['password'] = Hash::make($data['password']);
			}

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