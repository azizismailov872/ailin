<?php

namespace App\Http\Controllers\Admin\Podcast;

use ResponseFormat;
use ContentService;
use Illuminate\Http\Request;
use App\Filters\Podcast\Filter;
use App\Http\Controllers\Controller;
use App\Repositories\PodcastRepository;
use App\Http\Requests\Podcast\CreateRequest;
use App\Models\Podcast\Genre\PodcastGenre;
use App\Http\Requests\Podcast\UpdateRequest;

class PodcastController extends Controller
{
    public function list(Request $request, PodcastRepository $repository)
    {
        $podcasts = $repository->list($request->pageSize);

        return response($podcasts,200);
    }

    public function one(Request $request, PodcastRepository $repository)
    {
        $podcast = $repository->one($request->id,'trans');

        $podcast = ContentService::setFilesSize($podcast,'podcasts');

        return $podcast ? ResponseFormat::success($podcast,'podcast',200) : ResponseFormat::withErrors([
            'summary' => [
                'message' => 'Подкаст не найдена'
            ]
        ],500);
    }

    public function search(Request $request,PodcastRepository $repository)
    {
        $filter = new Filter($request,$repository->query());

        $podcasts = $filter->apply()->paginate($request->pageSize);

        return response($podcasts,200);
    }

    public function create(CreateRequest $request,PodcastRepository $repository)
    {   
        $defaultGenreId = PodcastGenre::where('title','Без жанра')->first()->id;

        if($request->uploadFile == 0)
        {
            //file will be save as link
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK,$defaultGenreId);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $podcast = $repository->create($data,$trans);

            if(!empty($podcast))
            {
                return ResponseFormat::success('Подкаст загружен','message',200);
            }
            else
            {
                return ResponseFormat::withError('Подкаст не был загружена',500);
            }
        }
        elseif($request->uploadFile == 1)
        {   
            //file will be save as file
            $data  = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE,$defaultGenreId);

            $trans =  ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE);

            $fileNames = ContentService::getFileNames($request->allFiles());

            $model = $repository->create($data,$trans,$fileNames);

            if(!empty($model))
            {
                if(ContentService::saveFiles($request->allFiles(),$model->id,'podcasts'))
                {
                    return ResponseFormat::success('Подкаст создан','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Подкаст не был создана',500);
                }
            }

            return ResponseFormat::withError('Подкаст не был создана',500);
        }
    }

    public function update(UpdateRequest $request,PodcastRepository $repository)
    {
        $defaultGenreId = PodcastGenre::where('title','Без жанра')->first()->id;
        if(!$request->id)
        {
            return ResponseFormat::withError('Подкаст не найден',404);
        }

        if($request->uploadFile == 0)
        {
            //Upload file as link
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK,$defaultGenreId);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $model = $repository->update($request->id,$data,$trans);

            ContentService::deleteDirectory($model->id,'podcasts');

            if(!empty($model))
            {
                return ResponseFormat::success('Подкаст обновлен','message',200);
            }
            else
            {
                return ResponseFormat::withError('Подкаст не обновлен',500);
            }
        }
        elseif($request->uploadFile == 1)
        {
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE,$defaultGenreId);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_FILE);

            $fileNames = ContentService::getFileNames($request->allFiles());

            $model = $repository->update($request->id,$data,$trans,$fileNames);

            if(!empty($model))
            {
                if(ContentService::saveFiles($request->allFiles(),$model->id,'podcasts'))
                {
                    return ResponseFormat::success('Подкаст обновлен','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Подкаст не была обновлен',500);
                }
            }
        }
    }

    public function delete(Request $request,PodcastRepository $repository)
    {
        $response = $repository->delete($request->id);

        return $response ? ResponseFormat::success('Подкаст удален','message',200) : ResponseFormat::withError('Ошибка. Подкаст не был удален',500);
    }
}
