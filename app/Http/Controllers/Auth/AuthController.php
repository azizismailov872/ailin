<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Login\LoginRequest;
use App\Models\RegisterApplication;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLogin()
    {
    	return view('auth.login');
    }

    public function login(LoginRequest $request)
    {
    	$phone = $request->phone;

    	if(!is_null($phone) && !empty($phone))
    	{
    		$user = User::where('phone',$phone)->first();

    		if(!is_null($user) && !empty($user))
    		{
    			Auth::login($user);

    			return redirect()->route('index');
    		}
    		else
    		{
    			RegisterApplication::create([
    				'phone' => $phone,
    				'status' => 1,
    			]);
    		}
    	}
    	return redirect()->route('showLogin')->withErrors(['register' =>'Заявка на регистрацию подана']);
    }

    public function logout()
    {
    	Auth::logout();

    	return redirect()->route('index');
    }
}
