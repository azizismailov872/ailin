<?php

namespace App\Http\Controllers\Audiobook;

use App\Http\Controllers\Controller;
use App\Models\AudioBook\AudioBook;
use App\Models\AudioBook\Genre\AudioBookGenre;
use App\Repositories\AudioBookGenreRepository;
use App\Repositories\AudioBookRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AudiobookController extends Controller
{
    public function genres(Request $request,AudioBookGenreRepository $repository)
    {	
    	$pageSize = $request->pageSize ? $request->pageSize : 9;

    	$list = $repository->query()->has('books')->paginate($pageSize);

    	return view('audiobook.genres',compact('list'));
    }

    public function list(Request $request, AudioBookRepository $repository)
    {
    	$list = $repository->listByGenre(2,$request->genre);

 		$genre = AudioBookGenre::where('slug',$request->genre)->first();

 		return view('audiobook.list',compact('list','genre'));
    }

    public function book(Request $request)
    {
        $model = AudioBook::where('slug',$request->slug)->first();

        $start = '0';

        if(Auth::check())
        {
            $history = Auth::user()->histories()->where([
                'historyable_type' => Audiobook::class,
                'historyable_id' => $model->id
            ])->first();

            if(!is_null($history) && !empty($history))
            {
                $start = $history->getTime();
            }
        }
        
        if(!is_null($model) && !empty($model))
        {
            return view('audiobook.book',compact('model','start'));
        }
        else
        {
            return redirect('/main');
        }
    }
}
