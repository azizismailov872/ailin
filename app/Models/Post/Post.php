<?php

namespace App\Models\Post;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';

    protected $guarded = [];

    public function getTitle()
    {	
    	$lang = app()->getLocale();
    	if($lang === 'ru')
    	{
    		if(strlen($this->title) > 0)
	    	{
	    		return $this->title;
	    	}

	    	return 'Нет заголовка';
    	}
    	else
    	{
    		if(strlen($this[$lang.'_title']) > 0)
    		{
    			return $this[$lang.'_title'];
    		}

    		return '';
    	}
    }

    public function getContent()
    {	
    	$lang = app()->getLocale();
    	if($lang === 'ru')
    	{
    		if(strlen($this->content) > 0)
	    	{
	    		return $this->content;
	    	}

    		return '';
    	}
    	else
    	{
    		if(strlen($this[$lang.'_content']) > 0)
    		{
    			return $this[$lang.'_content'];
    		}
    		return '';
    	}
    }
}
