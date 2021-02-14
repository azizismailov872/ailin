<?php

namespace App\Models\Podcast;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Podcast extends Model
{
    use HasFactory;

    protected $table = 'podcasts';

    protected $guarded = [];

    public function trans()
    {
    	return $this->hasOne('App\Models\Podcast\PodcastTrans','podcast_id');
    }

    public function genre()
    {
    	return $this->belongsTo('App\Models\Podcast\Genre\PodcastGenre','genre_id');
    }
}
