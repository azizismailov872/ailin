<?php

namespace App\Http\Controllers\Admin\Training;

use ResponseFormat;
use ContentService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\TrainingRepository;
use App\Models\Training\Genre\TrainingGenre;
use App\Models\Training\Training;
use App\Http\Requests\Training\CreateRequest;
use App\Http\Requests\Training\UpdateRequest;
use App\Filters\Training\Filter;
use Illuminate\Support\Facades\Storage;

class TrainingController extends Controller
{

    public function list(Request $request,TrainingRepository $repository)
    {
        $list = $repository->list($request->pageSize);

        return response($list,200);
    }

    public function one(Request $request,TrainingRepository $repository)
    {
        $model = $repository->one($request->id,['trans','video']);

        $model = ContentService::setFilesSize($model,'trainings');

        $model = ContentService::setVideosSize($model,'trainings');

        if(!empty($model))
        {
            return ResponseFormat::success($model,'training',200);
        }

        return ResponseFormat::withError('Тренинг не найден',404);
    }

    public function search(Request $request,TrainingRepository $repository)
    {
        $filter = new Filter($request,$repository->query());

        $trainings = $filter->apply()->paginate($request->pageSize);

        return response($trainings,200);
    }

    public function create(CreateRequest $request, TrainingRepository $repository)
    {	
    	$defaultGenreId = TrainingGenre::where('title','Без жанра')->first()->id;
    	if($request->uploadFile == 0)
        {
            //file will be save as link
            $data = ContentService::getData($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK,$defaultGenreId);

            $trans = ContentService::getTrans($request->all(),\App\Services\ContentService::UPLOAD_AS_LINK);

            $podcast = $repository->create($data,$trans);

            if(!empty($podcast))
            {
                return ResponseFormat::success('Тренинг загружен','message',200);
            }
            else
            {
                return ResponseFormat::withError('Тренинг не был загружен',500);
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
                if(ContentService::saveFiles($request->allFiles(),$model->id,'trainings'))
                {
                    return ResponseFormat::success('Тренинг создан','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Тренинг не был создана',500);
                }
            }

            return ResponseFormat::withError('Тренинг не был создан',500);
        }
    }


    public function update(UpdateRequest $request, TrainingRepository $repository)
    {
    	$defaultGenreId = TrainingGenre::where('title','Без жанра')->first()->id;
        if(!$request->id)
        {
            return ResponseFormat::withError('Тренинг не найден',404);
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
                return ResponseFormat::success('Тренинг обновлен','message',200);
            }
            else
            {
                return ResponseFormat::withError('Тренинг не обновлен',500);
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
                if(ContentService::saveFiles($request->allFiles(),$model->id,'trainings'))
                {
                    return ResponseFormat::success('Тренинг обновлен','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Тренинг не была обновлен',500);
                }
            }
        }
    }

    public function uploadVideo(Request $request,TrainingRepository $repository)
    {
        $training = Training::where('id',$request->id)->first();

        if(!empty($training))
        {   
            if($request->uploadVideo == 0)
            {
                $data = ContentService::getVideoLinks($request->all());

                $model = $repository->updateVideo($request->id,$data);

                if(!empty($model))
                {
                    return ResponseFormat::success('Видео загружено','message',200);
                }
            }
            elseif($request->uploadVideo == 1)
            {   
                $data = ContentService::getVideoNames($request->allFiles());

                $model = $repository->updateVideo($request->id,$data);

                if(!empty($model) && ContentService::saveVideos($request->id,$request->allFiles()))
                {
                    return ResponseFormat::success('Видео загружено','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Видео не было загружено',500);
                }
            }
        }

        return ResponseFormat::withError('Видео не было загружено',500);
    }

    public function deleteVideo(Request $request, TrainingRepository $repository)
    {
        if(!is_null($request->id))
        {
            $model = $repository->one($request->id,'video');

            if(!is_null($model) && !is_null($model->video))
            {
                if($model->video->delete())
                {   
                    if(Storage::disk('trainings')->exists($model->id.'/videos'))
                    {
                        ContentService::deleteDirectory($model->id.'/videos','trainings');
                    }
                    return ResponseFormat::success('Видео успешно удалено','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Видео не было удалено',500);
                }
            }

            return ResponseFormat::success('Видео успешно удалено','message',200);
        }

        return ResponseFormat::withError('Видео не было удалено',500);
    }

    public function delete(Request $request, TrainingRepository $repository)
    {
        $response = $repository->delete($request->id);

        return $response ? ResponseFormat::success('Тренинг удален','message',200) : ResponseFormat::withError('Тренинг не удален',500); 
    }
}
