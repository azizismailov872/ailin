<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreateRequest;
use App\Http\Requests\Post\UpdateRequest;
use App\Models\Post\Post;
use Illuminate\Http\Request;
use ResponseFormat;

class PostController extends Controller
{
    public function list(Request $request)
    {
    	$pageSize = $request->pageSize ? $request->pageSize : 10;

    	$list = Post::orderByDesc('created_at')->paginate($pageSize);

    	return response($list,200);
    }

    public function one(Request $request)
    {
    	$model = Post::where('id',$request->id)->first();

    	if(!is_null($model) && !empty($model))
    	{
    		return ResponseFormat::success($model,'post',200);
    	}

    	return ResponseFormat::withError('Пост не найден',404);
    }

    public function create(CreateRequest $request)
    {	
    	$data = $request->only(['title','content']);

    	$post = Post::create($data);

    	if(!is_null($post) && !empty($post))
    	{
    		return ResponseFormat::success('Пост успешно создан','message',200);
    	}
    	return ResponseFormat::withError('Пост не был создан',500);
    }

    public function update(UpdateRequest $request)
    {
        $post = Post::where('id',$request->id)->first();

        $data = $request->only(['title','content']);

        if(is_null($data['content']))
        {
            $data['content'] = '';
        }

        if(!is_null($post) && !empty($data))
        {
            if($post->update($data))
            {
                return ResponseFormat::success('Пост успешно обновлен','message',200);
            }
            else
            {
                return ResponseFormat::withError('Пост не был обновлен',500);
            }
        }

        return ResponseFormat::withError('Пост не был обновлен',500);
    }

    public function delete(Request $request)
    {
        if(Post::destroy($request->id))
        {
            return ResponseFormat::success('Пост удален','message',200);
        }

        return ResponseFormat::withError('Пост не удален',500);
    }
}
