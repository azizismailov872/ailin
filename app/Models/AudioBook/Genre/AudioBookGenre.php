<?php

namespace App\Models\AudioBook\Genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioBookGenre extends Model
{
    use HasFactory;

    protected $table = 'audiobook_genres';

    protected $guarded = [];

    public function trans()
    {
    	return $this->hasOne('App\Models\AudioBook\Genre\AudioBookGenreTrans','genre_id');
    }

    public function books()
    {
    	return $this->hasMany('App\Models\AudioBook\AudioBook','genre_id','id');
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
}
