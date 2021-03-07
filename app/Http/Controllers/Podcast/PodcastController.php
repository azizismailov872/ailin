<?php

namespace App\Http\Controllers\Podcast;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PodcastController extends Controller
{
   	public function genres()
   	{
   		return view('podcast.genres');
   	}
}
