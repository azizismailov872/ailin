<?php

use App\Http\Controllers\Admin\AudioBook\AudioBookController;
use App\Http\Controllers\Admin\AudioBook\Genre\AudioBookGenreController;
use App\Http\Controllers\Admin\Auth\AuthController;
use App\Http\Controllers\Admin\Podcast\Genre\PodcastGenreController;
use App\Http\Controllers\Admin\Podcast\PodcastController;
use App\Http\Controllers\Admin\Training\Genre\TrainingGenreController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => 'api/admin/v1/'],function(){
	//Auth
	Route::get('/auth',[AuthController::class,'auth']);
	Route::get('/logout',[AuthController::class,'logout']);
	Route::post('/login',[AuthController::class,'login']);
	//AudioBookGenre
	Route::get('/audiobooks/genres/list',[AudioBookGenreController::class,'list']);
	Route::get('/audiobooks/genres/one/{id}',[AudioBookGenreController::class,'one']);
	Route::get('/audiobooks/genres/delete/{id}',[AudioBookGenreController::class,'delete']);
	Route::get('/audiobooks/genres/genres-list',[AudioBookGenreController::class,'genresList']);
	Route::post('/audiobooks/genres/search',[AudioBookGenreController::class,'search']);
	Route::post('/audiobooks/genres/create',[AudioBookGenreController::class,'create']);
	Route::post('/audiobooks/genres/update/{id}',[AudioBookGenreController::class,'update']);
	//Podcast
	Route::get('/podcasts/genres/list',[PodcastGenreController::class,'list']);
	Route::get('/podcasts/genres/one/{id}',[PodcastGenreController::class,'one']);
	Route::get('/podcasts/genres/delete/{id}',[PodcastGenreController::class,'delete']);
	Route::post('/podcasts/genres/search',[PodcastGenreController::class,'search']);
	Route::post('/podcasts/genres/update/{id}',[PodcastGenreController::class,'update']);
	Route::post('/podcasts/genres/create',[PodcastGenreController::class,'create']);
	//Training
	Route::get('/trainings/genres/list',[TrainingGenreController::class,'list']);
	Route::get('/trainings/genres/one/{id}',[TrainingGenreController::class,'one']);
	Route::get('/trainings/genres/delete/{id}',[TrainingGenreController::class,'delete']);
	Route::post('/trainings/genres/search',[TrainingGenreController::class,'search']);
	Route::post('/trainings/genres/update/{id}',[TrainingGenreController::class,'update']);
	Route::post('/trainings/genres/create',[TrainingGenreController::class,'create']);
	//AudioBook
	Route::get('/audiobooks/list',[AudioBookController::class,'list']);
	Route::get('/audiobooks/one/{id}',[AudioBookController::class,'one']);
	Route::get('/audiobooks/delete/{id}',[AudioBookController::class,'delete']);
	Route::post('/audiobooks/search',[AudioBookController::class,'search']);
	Route::post('/audiobooks/create',[AudioBookController::class,'create']);
	Route::post('/audiobooks/update/{id}',[AudioBookController::class,'update']);
	//Podcast
	Route::get('/podcasts/list',[PodcastController::class,'list']);
	Route::get('/podcasts/one/{id}',[PodcastController::class,'one']);
	Route::post('/podcasts/search',[PodcastController::class,'search']);
	
});

Route::get('/{path?}',function(){
        return view('admin');
})->where(['path' => '.*']);



