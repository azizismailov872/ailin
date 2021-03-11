<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\History\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function history()
    {	
    	$user = Auth::user();

    	$histories = $user->histories;

    	return view('profile.history',compact('user','histories'));
    }
}
