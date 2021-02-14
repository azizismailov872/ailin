<?php

namespace App\Http\Controllers\Admin\Podcast;

use App\Filters\Podcast\Filter;
use App\Http\Controllers\Controller;
use App\Repositories\PodcastRepository;
use Illuminate\Http\Request;
use ResponseFormat;

class PodcastController extends Controller
{
    public function list(Request $request, PodcastRepository $repository)
    {
        $podcasts = $repository->list($request->pageSize);

        return response($podcasts,200);
    }

    public function one(Request $request, PodcastRepository $repository)
    {
        $podcast = $repository->one($request->id);

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

    public function create()
    {

    }

    public function update()
    {

    }

    public function delete(Request $request,PodcastRepository $repository)
    {

    }
}
