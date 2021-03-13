<?php

namespace App\Models\History;

use App\Models\AudioBook\AudioBook;
use App\Models\Podcast\Podcast;
use App\Models\Training\Training;
use App\Models\Training\TrainingVideo;
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

    public function podcast()
    {
        return $this->hasOne(Podcast::class,'id','historyable_id');
    }

    public function training()
    {
    	return $this->hasOne(Training::class,'id','historyable_id');
    }

    public function video()
    {
        return $this->hasOne(TrainingVideo::class,'id','historyable_id');
    }

    public function isAudiobook()
    {
        return ($this->historyable_type === 'App\Models\Audiobook\Audiobook') ? true : false;
    }

    public function isPodcast()
    {
        return ($this->historyable_type === Podcast::class) ? true : false;
    }

    public function getTime()
    {
        if(!is_null($this->time) && !empty($this->time))
        {
            return $this->time;
        }

        return '0';
    }

}
