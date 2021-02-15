<?php

namespace App\Http\Controllers\Admin\AudioBook;

//Services
use ResponseFormat;
use ContentService;
use Illuminate\Http\Request;
use App\Filters\AudioBook\Filter;
//Any
use App\Http\Controllers\Controller;
//Models
use App\Models\AudioBook\AudioBook;
use App\Repositories\AudioBookRepository;
//Requests
use App\Http\Requests\AudioBook\CreateRequest;
use App\Http\Requests\AudioBook\UpdateRequest;

class AudioBookController extends Controller
{
    public function list(Request $request,AudioBookRepository $repository)
    {	
    	$books = $repository->list($request->pageSize);

    	return response($books,200);
    }

    public function one(Request $request, AudioBookRepository $repository)
    {
        $book = $repository->one($request->id,'trans');

        $book = ContentService::setFilesSize($book,'books');

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
        if($request->uploadFile == 0)
        {
            //file will be save as link
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $book = $repository->create($data,$trans);

            if(!empty($book))
            {
                return ResponseFormat::success('Аудиокнига загружена','message',200);
            }
            else
            {
                return ResponseFormat::withError('Аудиокнига не была загружена',500);
            }
        }
        elseif($request->uploadFile == 1)
        {
            //file will be save as file
            $data  = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE);

            $trans =  ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE);

            $fileNames = ContentService::getFileNames($request->allFiles());

            $model = $repository->create($data,$trans,$fileNames);

            if(!empty($model))
            {
                if(ContentService::saveFiles($request->allFiles(),$model->id,'books'))
                {
                    return ResponseFormat::success('Аудиокнига создана','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Аудиокнига не была создана',500);
                }
            }

            return ResponseFormat::withError('Аудиокнига не была создана',500);
        }
    }

    public function delete(Request $request, AudioBookRepository $repository)
    {
        $response = $repository->delete($request->id);

        return $response ? ResponseFormat::success('Аудиокнига удалена','message',200) : ResponseFormat::withError('Ошибка. Книга не была удалена',500);
    }

    public function update(UpdateRequest $request,AudioBookRepository $repository)
    {   
        if(!$request->id)
        {
            return ResponseFormat::withError('Не найдена аудиокнига',404);
        }

        if($request->uploadFile == 0)
        {
            //Upload file as link
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $model = $repository->update($request->id,$data,$trans);

            ContentService::deleteDirectory($model->id,'books');

            if(!empty($model))
            {
                return ResponseFormat::success('Аудиокнига обновлена','message',200);
            }
            else
            {
                return ResponseFormat::withError('Аудиокнига не обновлена',500);
            }
        }
        elseif($request->uploadFile == 1)
        {
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE);

            $fileNames = ContentService::getFileNames($request->allFiles());

            $model = $repository->update($request->id,$data,$trans,$fileNames);

            if(!empty($model))
            {
                if(ContentService::saveFiles($request->allFiles(),$model->id,'books'))
                {
                    return ResponseFormat::success('Аудиокнига обновлена','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Аудиокнига не была обновлена',500);
                }
            }
        }
    }
}
