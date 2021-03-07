<?php

namespace App\Models\AudioBook;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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

    public function getFileLink($lang = null)
    {
        if(!is_null($lang) && $lang === 'ru')
        {
            if(!is_null($this->ru_file) && !empty($this->ru_file))
            {
                if(Storage::disk('books')->exists($this->id.'/'.$lang.'/'.$this->ru_file))
                {
                    //return 'storage/books/'.$this->id.'/'.$lang.'/'.$this->ru_file;
                    return asset('storage/books/'.$this->id.'/'.$lang.'/'.$this->ru_file);
                }
                else
                {
                    return null;
                }
            }
            elseif(!is_null($this->ru_file_link) && !empty($this->ru_file_link))
            {
                return $this->ru_file_link;
            }
            else
            {
                return null;
            }
        }
        else
        {
            if(!is_null($this->trans) && !is_null($this->trans[$lang.'_file']))
            {
                if(Storage::disk('books')->exists($this->id.'/'.$lang.'/'.$this->trans[$lang.'_file']))
                {
                    return asset('storage/books/'.$this->id.'/'.$lang.'/'.$this->trans[$lang.'_file']);
                }
            }
            elseif(!is_null($this->trans) && !is_null($this->trans[$lang.'_file_link']))
            {
                return $this->trans[$lang.'_file_link'];
            }
        }

        return null;
    }
}
