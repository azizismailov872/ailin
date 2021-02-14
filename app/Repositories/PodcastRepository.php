<?php 

namespace App\Repositories;

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

	public function one($id)
	{
		return $this->model->where('id',$id)->first();
	}

}