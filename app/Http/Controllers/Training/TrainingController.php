<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Models\Training\Genre\TrainingGenre;
use App\Models\Training\Training;
use App\Models\Training\TrainingVideo;
use App\Repositories\TrainingGenreRepository;
use App\Repositories\TrainingRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TrainingController extends Controller
{
    public function genres(Request $request, TrainingGenreRepository $repository)
    {
    	$pageSize = $request->pageSize ? $request->pageSize : 2;

    	$list = $repository->query()->has('trainings')->paginate($pageSize);

    	return view('training.genres',compact('list'));
    }

    public function list(Request $request,TrainingRepository $repository)
    {
    	$pageSize = $request->pageSize ? $request->pageSize : 2;

    	$list = $repository->listByGenre($pageSize,$request->genre);

    	$genre = TrainingGenre::where('slug',$request->genre)->first();

    	return view('training.list',compact('list','genre'));
    }

    public function training(Request $request)
    {
        $model = Training::where('slug',$request->slug)->first();

        $start = '0';

        $videoStart = '0';

        if(Auth::check())
        {
            $history = Auth::user()->histories()->where([
                'historyable_type' => Training::class,
                'historyable_id' => $model->id
            ])->first();

            if(!is_null($history) && !empty($history))
            {
                $start = $history->getTime();
            }

            if(!is_null($model->video) && !empty($model->video))
            {
                $videoHistory = Auth::user()->histories()->where([
                    'historyable_type' => TrainingVideo::class,
                    'historyable_id' => $model->video->id
                ])->first();

                if(!is_null($videoHistory) && !empty($videoHistory))
                {
                    $videoStart = $videoHistory->getTime();
                }
            }
            
        }

        if(!is_null($model) && !empty($model))
        {
            return view('training.training',compact('model','start','videoStart'));
        }

        return redirect('/main');
    }
}
