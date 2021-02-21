<?php

namespace App\Http\Controllers\Admin;

use ResponseFormat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Filters\VolunteerApplication\Filter;
use App\Repositories\VolunteerApplicationRepository;

class VolunteerApplicationController extends Controller
{
    public function list(Request $request, VolunteerApplicationRepository $repository)
    {
        $list = $repository->list($request->pageSize);

        return response($list,200);
    }

    public function one(Request $request, VolunteerApplicationRepository $repository)
    {
        $model = $repository->one($request->id);

        return !is_null($model) ? ResponseFormat::success($model,'model',200) : ResponseFormat::withError('Заявка не найдена',404);
    }

    public function search(Request $request, VolunteerApplicationRepository $repository)
    {
        $filter = new Filter($request,$repository->query());

        $models = $filter->apply()->paginate($request->pageSize);

        return response($models,200);
    }

    public function create(Request $request, VolunteerApplicationRepository $repository)
    {
        $model = $repository->create($request->all());

        return !is_null($model) ? ResponseFormat::success('Заявка на регистрацию создана','message',200) : ResponseFormat::withError('Заявка на регистрацию не создана',500);
    }

    public function update(Request $request, VolunteerApplicationRepository $repository)
    {
        if(!is_null($request->id))
        {
            $response = $repository->update($request->id,$request->all());

            return $response ? ResponseFormat::success('Заявка обновлена','message',200) : ResponseFormat::withError('Зявка не обновлена',500);
        }
    }

    public function delete(Request $request, VolunteerApplicationRepository $repository)
    {
        if(!is_null($request->id))
        {
            $response = $repository->delete($request->id);
            return $response ? ResponseFormat::success('Запрос на регистрацию удален','message',200) :
            ResponseFormat::withError('Запрос на регистрацию не удален',404);
        }
    }
}
