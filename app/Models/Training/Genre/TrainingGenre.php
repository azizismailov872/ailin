<?php

namespace App\Models\Training\Genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingGenre extends Model
{
    use HasFactory;

    protected $table = 'training_genres';

    protected $guarded = [];

    public function trans()
    {
    	return $this->hasOne('App\Models\Training\Genre\TrainingGenreTrans','genre_id');
    }

    public function trainings()
    {
    	return $this->hasMany('App\Models\Training\Training','genre_id','id');
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
