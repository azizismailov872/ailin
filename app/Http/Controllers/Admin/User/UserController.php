<?php

namespace App\Http\Controllers\Admin\User;

use ResponseFormat;
use App\Filters\User\Filter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use App\Http\Requests\User\CreateRequest;
use App\Http\Requests\User\UpdateRequest;

class UserController extends Controller
{
    public function list(Request $request, UserRepository $repository)
    {
    	$users = $repository->list($request->pageSize);

        return response($users,200);
    }

    public function one(Request $request, UserRepository $repository)
    {
        $user = $repository->one($request->id);

        return !is_null($user) ? ResponseFormat::success($user,'user',200) : ResponseFormat::withError('Пользователь не найден',404);
    }

    public function search(Request $request, UserRepository $repository)
    {
        $filter = new Filter($request, $repository->query());

        $users = $filter->apply()->paginate($request->pageSize);

        return response($users,200);
    }

    public function create(CreateRequest $request,UserRepository $repository)
    {
        $user = $repository->create($request->all());
        
        return !is_null($user) ? ResponseFormat::success('Пользователь успешно создан','message',200) : ResponseFormat::withError('Пользователь не был создан',500);
    }

    public function update(UpdateRequest $request, UserRepository $repository)
    {
        $user = $repository->update($request->id,$request->all());

        return !is_null($user) ? ResponseFormat::success('Пользователь обнолвен','message',200) : ResponseFormat::withError('Пользователь не обновлен',404);
    }

    public function delete(Request $request,UserRepository $repository)
    {
        if(!is_null($request->id))
        {
            $response = $repository->delete($request->id);

            return $response ? ResponseFormat::success('Пользователь удален','message',200) :
            ResponseFormat::withError('Пользователь не удален',404);
        }
    }
}
