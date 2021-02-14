<?php

namespace App\Models\AudioBook;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudioBookTrans extends Model
{
    use HasFactory;

    protected $table = 'audiobook_trans';

    protected $guarded = [];

    public function book()
    {
    	return $this->belongsTo('App\Models\AudioBook\AudioBook','book_id');
    }
}
