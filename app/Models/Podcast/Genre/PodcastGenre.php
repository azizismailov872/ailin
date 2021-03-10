<?php

namespace App\Models\Podcast\Genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PodcastGenre extends Model
{
    use HasFactory;

    protected $table = 'podcast_genres';

    protected $guarded = [];

    public function trans()
    {
    	return $this->hasOne('App\Models\Podcast\Genre\PodcastGenreTrans','genre_id');
    }

    public function podcasts()
    {
    	return $this->hasMany('App\Models\Podcast\Podcast','genre_id','id');
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
