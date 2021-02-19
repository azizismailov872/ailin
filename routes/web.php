<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\AuthController;
use App\Http\Controllers\Admin\User\UserController;
use App\Http\Controllers\Admin\Podcast\PodcastController;
use App\Http\Controllers\Admin\Training\TrainingController;
use App\Http\Controllers\Admin\AudioBook\AudioBookController;
use App\Http\Controllers\Admin\Podcast\Genre\PodcastGenreController;
use App\Http\Controllers\Admin\Training\Genre\TrainingGenreController;
use App\Http\Controllers\Admin\AudioBook\Genre\AudioBookGenreController;

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
	//PodcastGenre
	Route::get('/podcasts/genres/list',[PodcastGenreController::class,'list']);
	Route::get('/podcasts/genres/one/{id}',[PodcastGenreController::class,'one']);
	Route::get('/podcasts/genres/delete/{id}',[PodcastGenreController::class,'delete']);
	Route::get('/podcasts/genres/genres-list',[PodcastGenreController::class,'genresList']);
	Route::post('/podcasts/genres/search',[PodcastGenreController::class,'search']);
	Route::post('/podcasts/genres/update/{id}',[PodcastGenreController::class,'update']);
	Route::post('/podcasts/genres/create',[PodcastGenreController::class,'create']);
	//TrainingGenre
	Route::get('/trainings/genres/list',[TrainingGenreController::class,'list']);
	Route::get('/trainings/genres/one/{id}',[TrainingGenreController::class,'one']);
	Route::get('/trainings/genres/delete/{id}',[TrainingGenreController::class,'delete']);
	Route::get('/trainings/genres/genres-list',[TrainingGenreController::class,'getGenresList']);
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
	Route::get('/podcasts/delete/{id}',[PodcastController::class,'delete']);
	Route::post('/podcasts/search',[PodcastController::class,'search']);
	Route::post('/podcasts/create',[PodcastController::class,'create']);
	Route::post('/podcasts/update/{id}',[PodcastController::class,'update']);
	//Training
	Route::get('/trainings/list',[TrainingController::class,'list']);
	Route::get('/trainings/one/{id}',[TrainingController::class,'one']);
	Route::get('/trainings/delete/{id}',[TrainingController::class,'delete']);
	Route::get('/trainings/delete-video/{id}',[TrainingController::class,'deleteVideo']);
	Route::post('/trainings/create',[TrainingController::class,'create']);
	Route::post('/trainings/update/{id}',[TrainingController::class,'update']);
	Route::post('/trainings/search',[TrainingController::class,'search']);
	Route::post('/trainings/upload-video/{id}',[TrainingController::class,'uploadVideo']);
	//Users
	Route::get('/users/list',[UserController::class,'list']);
	Route::get('/users/one/{id}',[UserController::class,'one']);
	Route::get('/users/delete/{id}',[UserController::class,'delete']);
	Route::post('/users/search',[UserController::class,'search']);
	Route::post('/users/create',[UserController::class,'create']);
	Route::post('/users/update/{id}',[UserController::class,'update']);
	
});

Route::get('/{path?}',function(){
        return view('admin');
})->where(['path' => '.*']);



