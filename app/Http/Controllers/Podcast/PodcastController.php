<?php

namespace App\Http\Controllers\Podcast;

use App\Http\Controllers\Controller;
use App\Models\Podcast\Genre\PodcastGenre;
use App\Models\Podcast\Podcast;
use App\Repositories\PodcastGenreRepository;
use App\Repositories\PodcastRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PodcastController extends Controller
{
   	public function genres(Request $request, PodcastGenreRepository $repository)
   	{	
   		$pageSize = $request->pageSize ? $request->pageSize : 2;

   		$list = $repository->query()->has('podcasts')->paginate($pageSize);

   		return view('podcast.genres',compact('list'));
   	}

   	public function list(Request $request, PodcastRepository $repository)
   	{
        $pageSize = $request->pageSize ? $request->pageSize : 2;

        $list = $repository->listByGenre($pageSize,$request->genre);

        $genre = PodcastGenre::where('slug',$request->genre)->first();

        return view('podcast.list',compact('list','genre'));
   	}

    public function podcast(Request $request, PodcastRepository $repository)
    {
        $model = Podcast::where('slug',$request->slug)->first();

        $start = '0';

        if(Auth::check())
        {
            $history = Auth::user()->histories()->where([
                'historyable_type' => Podcast::class,
                'historyable_id' => $model->id
            ])->first();

            if(!is_null($history) && !empty($history))
            {
                $start = $history->getTime();
            }
        }

        if(!is_null($model) && !empty($model))
        {
            return view('podcast.podcast',compact('model','start'));
        }

        return redirect('/main');
    }
}
