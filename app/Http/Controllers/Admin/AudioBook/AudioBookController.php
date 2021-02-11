<?php

namespace App\Http\Controllers\Admin\AudioBook;

use ResponseFormat;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AudioBookController extends Controller
{
    public function index()
    {
    	return ResponseFormat::success('Жлпа','message',200);
    }
}
