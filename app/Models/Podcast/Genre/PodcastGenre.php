<?php

namespace App\Models\Podcast\Genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PodcastGenre extends Model
{
    use HasFactory;

    protected $table = 'podcast_genres';

    protected $guarded = [];
}
