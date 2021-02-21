<?php

namespace App\Http\Controllers\Admin\AdminUser;

use ResponseFormat;
use ContentService;
use Illuminate\Http\Request;
use App\Models\AdminUser\AdminUser;
use App\Filters\AdminUser\Filter;
use App\Http\Controllers\Controller;
use App\Repositories\AdminUserRepository;
use App\Http\Requests\AdminUser\CreateRequest;
use App\Http\Requests\AdminUser\UpdateRequest;
use Illuminate\Support\Facades\Storage;

class AdminUserController extends Controller
{
    public function list(Request $request, AdminUserRepository $repository)
    {
        $list = $repository->list($request->pageSize);

        return response($list,200);
    }

    public function one(Request $request, AdminUserRepository $repository)
    {
        $model = $repository->one($request->id);

        if(!is_null($model))
        {
            $model = ContentService::setImageSize($model,'users');
        }

        return !is_null($model) ? ResponseFormat::success($model,'user',200) : ResponseFormat::withError('Пользователь не найден',404);
    }

    public function search(Request $request, AdminUserRepository $repository)
    {
        $filter = new Filter($request, $repository->query());

        $models = $filter->apply()->paginate($request->pageSize);

        return response($models,200);
    }

    public function create(CreateRequest $request,AdminUserRepository $repository)
    {   
        $user = $repository->create($request->except('photo'));
        if(!empty($user))
        {
            if($request->has('photo') && is_file($request->photo))
            {
                $imageName = ContentService::uploadImage($user->id,$request->photo,'users');
                if($imageName)
                {
                    $user->update(['photo' => $imageName]);
                }
            }
        }
        return !is_null($user) ? ResponseFormat::success('Пользователь успешно создан','message',200) : ResponseFormat::withError('Пользователь не был создан',500);
    }

    public function update(UpdateRequest $request,AdminUserRepository $repository)
    {
        $user = $repository->update($request->id,$request->except('photo'));
        if(!empty($user))
        {
            if($request->has('photo') && is_file($request->photo))
            {
                $imageName = ContentService::uploadImage($user->id,$request->photo,'users');
                if($imageName)
                {
                    $user->update(['photo' => $imageName]);
                }
            }
        }
        return !is_null($user) ? ResponseFormat::success('Пользователь обнолвен','message',200) : ResponseFormat::withError('Пользователь не обновлен',404);
    }

    public function delete(Request $request,AdminUserRepository $repository)
    {
        if(!is_null($request->id))
        {
            $response = $repository->delete($request->id);
            ContentService::deleteDirectory($request->id,'users');

            return $response ? ResponseFormat::success('Пользователь удален','message',200) :
            ResponseFormat::withError('Пользователь не удален',404);
        }
    }


    public function deletePhoto(Request $request)
    {
        $user = AdminUser::where('id',$request->id)->first();

        if(!empty($user) && !is_null($user))
        {
            if(Storage::disk('users')->exists($user->id))
            {
                if(ContentService::deleteDirectory($user->id,'users'))
                {   
                    $user->update(['photo' => 'default.png']);
                    return ResponseFormat::success('Фото удалено','message',200);
                }
                else
                {
                    return ResponseFormat::withError('Фото не удалено',500);
                }
            }
            else
            {
                return ResponseFormat::success('Фото удалено','message',200);
            }
        }
    }
}
