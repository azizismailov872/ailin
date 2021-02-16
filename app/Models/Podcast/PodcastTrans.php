<?php

namespace App\Models\Podcast;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PodcastTrans extends Model
{
    use HasFactory;

    protected $table = 'podcast_trans';

    protected $guarded = [];

    public function podcast()
    {
    	return $this->belongsTo('App\Models\Podcast\Podcast','podcast_id');
    }
}
