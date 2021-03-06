<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
    	return view('main.main');
    }

    public function volunteers()
    {

    }

    public function about()
    {
        return view('main.about');
    }

    public function welcome()
    {
        return view('main.welcome');
    }
}
