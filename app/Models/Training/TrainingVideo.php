<?php

namespace App\Models\Training;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingVideo extends Model
{
    use HasFactory;

    protected $table = 'training_videos';

    protected $guarded = [];

    public function training()
    {
    	return $this->belongsTo('App\Models\Training\Training','training_id');
    }
}
