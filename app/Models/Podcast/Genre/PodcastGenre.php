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

    public function podcast()
    {
    	return $this->hasOne('App\Models\Podcast\Podcast','genre_id','id');
    }
}
