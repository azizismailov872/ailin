<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Models\Training\Genre\TrainingGenre;
use App\Models\Training\Training;
use App\Repositories\TrainingGenreRepository;
use App\Repositories\TrainingRepository;
use Illuminate\Http\Request;

class TrainingController extends Controller
{
    public function genres(Request $request, TrainingGenreRepository $repository)
    {
    	$pageSize = $request->pageSize ? $request->pageSize : 2;

    	$list = $repository->list($pageSize);

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

        if(!is_null($model) && !empty($model))
        {
            return view('training.training',compact('model'));
        }

        return redirect('/main');
    }
}
