<?php

namespace App\Http\Controllers\Admin\Podcast\Genre;

use ResponseFormat;
use GenresService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Filters\Podcast\Genre\Filter;
use App\Repositories\PodcastGenreRepository;
use App\Http\Requests\Podcast\Genre\CreateRequest;
use App\Http\Requests\Podcast\Genre\UpdateRequest;

class PodcastGenreController extends Controller
{
	public function list(Request $request,PodcastGenreRepository $repository)
	{
		$genres = $repository->list($request->pageSize);

    	return response($genres,200);
	}

	public function one(Request $request,PodcastGenreRepository $repository)
	{
		$genre = $repository->one($request->id);

    	return $genre ? ResponseFormat::success($genre,'genre',200) : ResponseFormat::withErrors([
    		'summary' => [
    			'message' => 'Жанр не найден'
    		]
    	],500);
	}

	public function search(Request $request,PodcastGenreRepository $repository)
	{
		$filter = new Filter($request,$repository->query());

        $genres = $filter->apply()->paginate($request->pageSize);

        return response($genres,200);
	}

	public function create(CreateRequest $request,PodcastGenreRepository $repository)
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

	public function update(UpdateRequest $request,PodcastGenreRepository $repository)
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

	public function delete(Request $request,PodcastGenreRepository $repository)
	{
		$repository->delete($request->id);

        return ResponseFormat::success('Жанр удален','message',200);
	}
}
