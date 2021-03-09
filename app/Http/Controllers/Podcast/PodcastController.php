<?php

namespace App\Http\Controllers\Podcast;

use App\Http\Controllers\Controller;
use App\Models\Podcast\Genre\PodcastGenre;
use App\Models\Podcast\Podcast;
use App\Repositories\PodcastGenreRepository;
use App\Repositories\PodcastRepository;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
   	public function genres(Request $request, PodcastGenreRepository $repository)
   	{	
   		$pageSize = $request->pageSize ? $request->pageSize : 2;

   		$list = $repository->list($pageSize);

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

        if(!is_null($model) && !empty($model))
        {
            return view('podcast.podcast',compact('model'));
        }

        return redirect('/main');
    }
}
