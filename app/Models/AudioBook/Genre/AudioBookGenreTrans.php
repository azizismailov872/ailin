<?php

namespace App\Models\AudioBook\Genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioBookGenreTrans extends Model
{
    use HasFactory;

    protected $table = 'audiobook_genre_trans';

    protected $guarded = [];

    public function book()
    {
    	return $this->belongsTo('App\Models\AudioBook\Genre\AudioBookGenre','id');
    }
}
