<?php

namespace App\Http\Controllers\Admin\AudioBook\Genre;

use App\Filters\AudioBook\Genre\Filter;
use App\Http\Controllers\Controller;
use App\Http\Requests\AudioBook\Genre\CreateRequest;
use App\Http\Requests\AudioBook\Genre\UpdateRequest;
use App\Repositories\AudioBookGenreRepository;
use GenresService;
use Illuminate\Http\Request;
use ResponseFormat;

class AudioBookGenreController extends Controller
{
    public function list(Request $request,AudioBookGenreRepository $repository)
    {
    	$genres = $repository->list($request->pageSize);

    	return response($genres,200);
    }

    public function one(Request $request,AudioBookGenreRepository $repository)
    {
    	$genre = $repository->one($request->id);

    	return $genre ? ResponseFormat::success($genre,'genre',200) : ResponseFormat::withErrors([
    		'summary' => [
    			'message' => 'Жанр не найден'
    		]
    	],500);
    }

    public function search(Request $request,AudioBookGenreRepository $repository )
    {
        $filter = new Filter($request,$repository->query());

        $genres = $filter->apply()->paginate($request->pageSize);

        return response($genres,200);
    }

    public function create(CreateRequest $request,AudioBookGenreRepository $repository)
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

            return  ResponseFormat::withError('Ошибка. Жанр не был создан',500);
        }
    }

    public function update(UpdateRequest $request,AudioBookGenreRepository $repository)
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

    public function delete(Request $request, AudioBookGenreRepository $repository )
    {
        $repository->delete($request->id);

        return ResponseFormat::success('Жанр удален','message',200);
    }
}
