<?php

namespace App\Models\History;

use App\Models\AudioBook\AudioBook;
use App\Models\Training\Training;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $table = 'histories';

    protected $guarded = [];

    public function historyable()
    {
    	return $this->morphTo();
    }

    public function audiobook()
    {
    	return $this->hasOne(AudioBook::class,'id','historyable_id');
    }

    public function trainings()
    {
    	return $this->hasMany(Training::class,'id','historyable_id');
    }

    public function isAudiobook()
    {
        return ($this->historyable_type === 'App\Models\Audiobook\Audiobook') ? true : false;
    }

}
