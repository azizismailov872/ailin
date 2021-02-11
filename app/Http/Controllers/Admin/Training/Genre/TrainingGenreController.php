<?php

namespace App\Http\Controllers\Admin\Training\Genre;

use GenresService;
use ResponseFormat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Filters\Training\Genre\Filter;
use App\Repositories\TrainingGenreRepository;
use App\Http\Requests\Training\Genre\CreateRequest;
use App\Http\Requests\Training\Genre\UpdateRequest;

class TrainingGenreController extends Controller
{
	public function list(Request $request,TrainingGenreRepository $repository)
	{
		$genres = $repository->list($request->pageSize);

    	return response($genres,200);
	}

	public function one(Request $request,TrainingGenreRepository $repository)
	{
		$genre = $repository->one($request->id);

    	return $genre ? ResponseFormat::success($genre,'genre',200) : ResponseFormat::withErrors([
    		'summary' => [
    			'message' => 'Жанр не найден'
    		]
    	],500);
	}

	public function search(Request $request,TrainingGenreRepository $repository)
	{
		$filter = new Filter($request,$repository->query());

        $genres = $filter->apply()->paginate($request->pageSize);

        return response($genres,200);
	}

	public function create(CreateRequest $request,TrainingGenreRepository $repository)
	{
		if(!empty($request->all()))
        {   
            $data = GenresService::getData($request);

            $trans = GenresService::getTrans($request);

            if(!empty($data))
            {
                $genre = $repository->create($data,$trans);

                return $genre ? ResponseFormat::success('Жанр успешно создан','message',200) : ResponseFormat::withError('Ошибка. Жанр не был создан',500);
            }
        }

        return  ResponseFormat::withError('Ошибка. Жанр не был создан',500);
	}

	public function update(UpdateRequest $request,TrainingGenreRepository $repository)
	{
		if(!empty($request->all()))
        {
            $data =  GenresService::getData($request);

            $trans = GenresService::getTrans($request);

            if(!empty($data))
            {
                if($repository->update($request->id,$data,$trans))
                {
                    return ResponseFormat::success('Жанр успешно обновлен','message',200);
                }
            }
        }

        return  ResponseFormat::withError('Ошибка. Жанр не был обновлен',500);
	}

	public function delete(Request $request,TrainingGenreRepository $repository)
	{
		$repository->delete($request->id);

        return ResponseFormat::success('Жанр удален','message',200);
	}
}
