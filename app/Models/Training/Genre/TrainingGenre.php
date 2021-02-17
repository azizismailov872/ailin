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

    public function training()
    {
    	return $this->hasOne('App\Models\Training\Training','genre_id','id');
    }
}
