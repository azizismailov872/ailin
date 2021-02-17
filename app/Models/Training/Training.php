<?php

namespace App\Models\Training;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    use HasFactory;

    protected $table = 'trainings';

    protected $guarded = [];

    public function video()
    {
    	return $this->hasOne('App\Models\Training\TrainingVideo','training_id','id');
    }

    public function trans()
    {
    	return $this->hasOne('App\Models\Training\TrainingTrans','training_id','id');
    }

    public function genre()
    {
    	return $this->belongsTo('App\Models\Training\Genre\TrainingGenre','genre_id');
    }
}
