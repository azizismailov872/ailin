<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Requests\Volunteer\SendRequest;
use App\Models\Post\Post;
use App\Models\VolunteerApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
    public function default()
    {
        return redirect()->route('language');
    }

    public function index()
    {   	
        return (Auth::check()) ? view('main.main') : view('main.welcome');
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

    public function showVolunteers()
    {
        return view('main.volunteers');
    }

    public function volunteers(SendRequest $request)
    {
        $phone = $request->phone;

        if(!is_null($phone) && !empty($phone))
        {
            VolunteerApplication::create([
                'phone' => $phone,
                'status' => 1,
            ]);
        }
        return redirect()->route('showVolunteers')->withErrors(['created' => __('messages.volunteerAppCreated')]);
    }

    public function posts()
    {   

        $posts = Post::orderByDesc('created_at')->take(5)->get();

        return view('main.posts',compact('posts'));
    }

    public function about()
    {
        return view('main.about');
    }
}
