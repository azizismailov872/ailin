<?php

namespace App\Models\AudioBook;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class AudioBook extends Model
{
    use HasFactory;

    protected $table = 'audiobooks';

    protected $guarded = [];

    public function trans()
    {
    	return $this->hasOne('App\Models\AudioBook\AudioBookTrans','book_id');
    }

    public function genre()
    {
    	return $this->belongsTo('App\Models\AudioBook\Genre\AudioBookGenre','genre_id');
    }

    public function getFileLink()
    {   
        $lang = app()->getLocale();
        if(!is_null($lang) && $lang === 'ru')
        {
            if(!is_null($this->ru_file) && !empty($this->ru_file))
            {
                if(Storage::disk('books')->exists($this->id.'/'.$lang.'/'.$this->ru_file))
                {
                    //return 'storage/books/'.$this->id.'/'.$lang.'/'.$this->ru_file;
                    return asset('storage/books/'.$this->id.'/'.$lang.'/'.$this->ru_file);
                }
                else
                {
                    return null;
                }
            }
            elseif(!is_null($this->ru_file_link) && !empty($this->ru_file_link))
            {
                return $this->ru_file_link;
            }
            else
            {
                return null;
            }
        }
        else
        {
            if(!is_null($this->trans) && !is_null($this->trans[$lang.'_file']))
            {
                if(Storage::disk('books')->exists($this->id.'/'.$lang.'/'.$this->trans[$lang.'_file']))
                {
                    return asset('storage/books/'.$this->id.'/'.$lang.'/'.$this->trans[$lang.'_file']);
                }
            }
            elseif(!is_null($this->trans) && !is_null($this->trans[$lang.'_file_link']))
            {
                return $this->trans[$lang.'_file_link'];
            }
        }

        return null;
    }


    public function getTitle()
    {
        $locale = app()->getLocale();
        if($locale === 'ru')
        {
            return $this->title;
        }
        else
        {
            if(!is_null($this->trans) && !empty($this->trans))
            {
                return $this->trans[$locale.'_title'];
            }
            else
            {
                return 'No title';
            }
        }
    }

    public function getDescription()
    {
        $locale = app()->getLocale();

        if($locale === 'ru')
        {
            if(!is_null($this->description) && strlen($this->description) > 0)
            {
                return $this->description;
            }
            
            return __('main.noDescription');
        }
        else
        {
            if(!is_null($this->trans) && !is_null($this->trans[$locale.'_description']) && strlen($this->trans[$locale.'_description']) > 0)
            {
                return $this->trans[$locale.'_description'];
            }

            return __('main.noDescription');
        }
    }

    public function getGenreTitle()
    {
        $locale = app()->getLocale();
        if($locale === 'ru')
        {
            if(!is_null($this->genre) && !is_null($this->genre->title) && strlen($this->genre->title))
            {
                return $this->genre->title;
            }
            else
            {
                return 'Без жанра';
            }
        }
        else
        {
            if(!is_null($this->genre) && !is_null($this->genre->trans))
            {
                if(!is_null($this->genre->trans[$locale.'_title']) && strlen($this->genre->trans[$locale.'_title']) > 0)
                {
                    return $this->genre->trans[$locale.'_title'];
                }
            }
            else
            {
                return 'No genre';
            }
        }
    }
}
