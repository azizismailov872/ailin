<?php

namespace App\Http\Controllers\Audiobook;

use App\Http\Controllers\Controller;
use App\Models\AudioBook\AudioBook;
use App\Models\AudioBook\Genre\AudioBookGenre;
use App\Repositories\AudioBookGenreRepository;
use App\Repositories\AudioBookRepository;
use Illuminate\Http\Request;

class AudiobookController extends Controller
{
    public function genres(Request $request,AudioBookGenreRepository $repository)
    {	
    	$pageSize = $request->pageSize ? $request->pageSize : 2;

    	$list = $repository->list($pageSize);

    	return view('audiobook.genres',compact('list'));
    }

    public function list(Request $request, AudioBookRepository $repository)
    {
    	$list = $repository->listByGenre(2,$request->genre);

 		$genre = AudioBookGenre::where('slug',$request->genre)->first();

 		return view('audiobook.list',compact('list','genre'));
    }

    public function test(Request $request)
    {
        $book = AudioBook::where('id',$request->id)->first();
        dd($book->getFileLink(app()->getLocale()));
    }
}
