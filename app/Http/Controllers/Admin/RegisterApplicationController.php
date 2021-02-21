<?php

namespace App\Http\Controllers\Admin;

use ResponseFormat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Filters\RegisterApplication\Filter;
use App\Repositories\RegisterApplicationRepository;

class RegisterApplicationController extends Controller
{
    public function list(Request $request, RegisterApplicationRepository $repository)
    {
        $list = $repository->list($request->pageSize);

        return response($list,200);
    }

    public function one(Request $request, RegisterApplicationRepository $repository)
    {
        $model = $repository->one($request->id);

        return !is_null($model) ? ResponseFormat::success($model,'model',200) : ResponseFormat::withError('Заявка не найдена',404);
    }

    public function search(Request $request, RegisterApplicationRepository $repository)
    {
        $filter = new Filter($request,$repository->query());

        $models = $filter->apply()->paginate($request->pageSize);

        return response($models,200);
    }

    public function create(Request $request, RegisterApplicationRepository $repository)
    {
        $model = $repository->create($request->all());

        return !is_null($model) ? ResponseFormat::success('Заявка на регистрацию создана','message',200) : ResponseFormat::withError('Заявка на регистрацию не создана',500);
    }

    public function update(Request $request, RegisterApplicationRepository $repository)
    {
        if(!is_null($request->id))
        {
            $response = $repository->update($request->id,$request->all());

            return $response ? ResponseFormat::success('Заявка обновлена','message',200) : ResponseFormat::withError('Зявка не обновлена',500);
        }
    }

    public function delete(Request $request, RegisterApplicationRepository $repository)
    {
        if(!is_null($request->id))
        {
            $response = $repository->delete($request->id);
            return $response ? ResponseFormat::success('Запрос на регистрацию удален','message',200) :
            ResponseFormat::withError('Запрос на регистрацию не удален',404);
        }
    }
}
