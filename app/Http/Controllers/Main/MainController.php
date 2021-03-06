<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class MainController extends Controller
{
    public function default()
    {
        return redirect()->route('language');
    }

    public function index()
    {
    	return view('main.main');
    }

    public function language()
    {
        return view('main.language');
    }

    public function setLanguage(Request $request)
    {
        $locale = $request->lang;
        
        if(!is_null($locale) && !empty($locale))
        {   
            session(['locale' => $locale]);
            App::setLocale($locale);

            return redirect()->route('index');
        }
        return redirect()->route('index');
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
