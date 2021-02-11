<?php

namespace App\Http\Controllers\Admin\Auth;

use Auth;
use ResponseFormat;
use AdminUserService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class AuthController extends Controller
{
   	public function login(LoginRequest $request)
   	{   
        $user = AdminUserService::login($request->email,$request->password,$request->rememberMe);

        if($user)
        {
            return ResponseFormat::success($user,'user',200);
        }
        else
        {
            $messages = [
                'summary' => [
                    'message' => 'Неверный логин или пароль'
                ]
            ];
            throw new HttpResponseException(ResponseFormat::withErrors($messages,401));
        }
   	}

   	public function auth(Request $request)
   	{ 
        $user = AdminUserService::auth();

        return $user ? ResponseFormat::success($user,'user',200) : ResponseFormat::withError('Пользователь не авторизован',401);
   	}

   	public function logout(Request $request)
   	{
        AdminUserService::logout();

        return ResponseFormat::success('Вы успешно вышли из аккаунта','message',200);
   	}
}
