<?php 

namespace App\Filters\Training;

class Filter
{
	protected $request;

	protected $query;

	public function __construct($request,$query)
	{
		$this->request = $request;
		$this->query = $query;
	}

	public function apply()
	{	
		$filters = $this->filters();
		if(!empty($filters))
		{
			foreach($filters as $filter => $value)
			{
				if(method_exists($this,$filter))
                {   
                	if($filter !== 'status')
                	{
                		if(strlen($value) > 0 && isset($value))
	                	{
	                		 $this->$filter($value);
	                	}
                	}else 
                	{
                		 $this->$filter($value);
                	}
                	
                }
			}
		}

		return $this->query;
	}

	public function filters()
    {	
        $allFills = $this->request->except('_token');

        if(!empty($allFills))
        {
            foreach($allFills as $filter => $value)
            {   
                if($this->request->$filter !== null)
                {
                    $fills[$filter] = $value;
                }
            }

            return $this->request->except($fills);
        }
        else
        {
            return null;
        }
    }

    public function title($value)
	{
		$this->query->where('title','like',"%$value%");
	}
	
	public function genreTitle($value)
	{
		$this->query->whereHas('genre',function($q) use ($value){
			$q->where('title','like',"%$value%");
		});
	}

	public function slug($value)
	{
		$this->query->where('slug','like',"%$value%");
	}

	public function created_at($value)
	{	
		$date = date('Y-m-d',strtotime($value));
		$this->query->whereDate('created_at','=',$date);
	}

	public function status($value)
	{	
		$this->query->where('status',$value);
	}

	public function author($value)
	{
		$this->query->where('author','like',"%$value%");
	}

	public function genreId($value)
	{
		$this->query->where('genre_id',$value);
	}
}