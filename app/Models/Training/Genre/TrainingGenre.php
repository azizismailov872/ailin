<?php

namespace App\Models\Training\Genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingGenre extends Model
{
    use HasFactory;

     protected $table = 'training_genres';

    protected $guarded = [];
}
