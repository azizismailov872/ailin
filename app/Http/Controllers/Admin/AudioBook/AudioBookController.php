<?php

namespace App\Http\Controllers\Admin\AudioBook;

use App\Filters\AudioBook\Filter;
use App\Http\Controllers\Controller;
use App\Http\Requests\AudioBook\CreateRequest;
use App\Models\AudioBook\AudioBook;
use App\Repositories\AudioBookRepository;
use ContentService;
use Illuminate\Http\Request;
use ResponseFormat;


class AudioBookController extends Controller
{
    public function list(Request $request,AudioBookRepository $repository)
    {	
    	$books = $repository->list($request->pageSize);

    	return response($books,200);
    }

    public function one(Request $request, AudioBookRepository $repository)
    {
        $book = $repository->one($request->id);

        $book = ContentService::setFilesSize($book);

        return $book ? ResponseFormat::success($book,'book',200) : ResponseFormat::withErrors([
            'summary' => [
                'message' => 'Книга не найдена'
            ]
        ],500);
    }

    public function search(Request $request, AudioBookRepository $repository)
    {
        $filter = new Filter($request,$repository->query());

        $books = $filter->apply()->paginate($request->pageSize);

        return response($books,200);
    }

    public function create(CreateRequest $request,AudioBookRepository $repository)
    {    
        if($request->has('uploadFile'))
        {
            if($request->uploadFile === 0)
            {
                $data = ContentService::getData($request); 

                $trans = ContentService::getTrans($request);

                $book = $repository->create($data,$trans);

                if(isset($book) && !empty($book))
                {
                    return ResponseFormat::success('Аудиокнига успешно загружена','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Ошибка при загрузке аудиокниги',500);
                }
            }
            else
            {   
                $data = ContentService::getData($request); 

                $trans = ContentService::getTrans($request);

                $files = ContentService::getFiles($request);

                $book = $repository->create($data,$trans);

                if(ContentService::saveFiles($files,$book))
                {
                    return ResponseFormat::success('Аудиокнига успешно загружена','message',200);
                }
                else 
                {
                     return ResponseFormat::withError('Ошибка при загрузке аудиокниги',500);
                }
            }
        }
    }

    public function delete(Request $request, AudioBookRepository $repository)
    {
        $response = $repository->delete($request->id);

        return $response ? ResponseFormat::success('Аудиокнига удалена','message',200) : ResponseFormat::withError('Ошибка. Книга не была удалена',500);
    }

    public function update(Request $request,AudioBookRepository $repository)
    {
        if($request->uploadFile == 1)
        {
            $data = ContentService::getData($request);

            $trans = ContentService::getTrans($request);

            $files = ContentService::getFiles($request);

            $model = $repository->update($request->id,$data,$trans);

            if(ContentService::updateFiles($files,$model,'books'))
            {
                return ResponseFormat::success('Аудиокнига обновлена','message',200);
            }

            return ResponseFormat::withError('Ошибка',500);
        }
        else
        {   
            $data = ContentService::getData($request,0);

            $trans = ContentService::getTrans($request,0);

            $model = $repository->update($request->id,$data,$trans);

            if(!empty($model))
            {
                ContentService::deleteDirectory($model->id,'books');

                return ResponseFormat::success('Аудиокнига обновлена','message',200);
            }

            return ResponseFormat::withError('Ошибка',500);
        }
    }
}
