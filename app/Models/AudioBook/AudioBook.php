<?php

namespace App\Models\AudioBook;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
