<?php

//AdminControllers
use App\Http\Controllers\Admin\AdminUser\AdminUserController;
use App\Http\Controllers\Admin\AudioBook\AudioBookController;
use App\Http\Controllers\Admin\AudioBook\Genre\AudioBookGenreController;
use App\Http\Controllers\Admin\Auth\AuthController;
use App\Http\Controllers\Admin\Podcast\Genre\PodcastGenreController;
use App\Http\Controllers\Admin\Podcast\PodcastController;
use App\Http\Controllers\Admin\RegisterApplicationController;
use App\Http\Controllers\Admin\Training\Genre\TrainingGenreController;
use App\Http\Controllers\Admin\Training\TrainingController;
use App\Http\Controllers\Admin\User\UserController;
use App\Http\Controllers\Admin\VolunteerApplicationController;
use Illuminate\Support\Facades\Route;
//Frontned Controllers
use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\Auth\AuthController as LoginController;
use App\Http\Controllers\Audiobook\AudiobookController as BookController;
use App\Http\Controllers\Podcast\PodcastController as FrontPodcastController;
use App\Http\Controllers\Training\TrainingController as FrontTrainingController;
use App\Http\Controllers\Profile\ProfileController;

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
	//RegisterApplication
	Route::get('/register-applications/list',[RegisterApplicationController::class,'list']);
	Route::get('/register-applications/one/{id}',[RegisterApplicationController::class,'one']);
	Route::get('/register-applications/delete/{id}',[RegisterApplicationController::class,'delete']);
	Route::post('/register-applications/search',[RegisterApplicationController::class,'search']);
	Route::post('/register-applications/create',[RegisterApplicationController::class,'create']);
	Route::post('/register-applications/update/{id}',[RegisterApplicationController::class,'update']);
	//AdminUser
	Route::get('/admin-users/list',[AdminUserController::class,'list']);
	Route::get('/admin-users/one/{id}',[AdminUserController::class,'one']);
	Route::get('/admin-users/delete/{id}',[AdminUserController::class,'delete']);
	Route::get('/admin-users/delete-photo/{id}',[AdminUserController::class,'deletePhoto']);
	Route::post('/admin-users/search',[AdminUserController::class,'search']);
	Route::post('/admin-users/create',[AdminUserController::class,'create']);
	Route::post('/admin-users/update/{id}',[AdminUserController::class,'update']);
	//VolunteerApplication
	Route::get('/volunteer-applications/list',[VolunteerApplicationController::class,'list']);
	Route::get('/volunteer-applications/one/{id}',[VolunteerApplicationController::class,'one']);
	Route::get('/volunteer-applications/delete/{id}',[VolunteerApplicationController::class,'delete']);
	Route::post('/volunteer-applications/search',[VolunteerApplicationController::class,'search']);
	Route::post('/volunteer-applications/create',[VolunteerApplicationController::class,'create']);
	Route::post('/volunteer-applications/update/{id}',[VolunteerApplicationController::class,'update']);
	
});

Route::group(['prefix' => 'admin', 'middleware' => 'admin'],function(){
	Route::get('/{path?}',function(){
        return view('admin');
	})->where(['path' => '.*']);
});

Route::group(['middleware' => 'locale'],function(){
	Route::get('/',[MainController::class,'default'])->name('default');
	Route::get('/main',[MainController::class,'index'])->name('index');
	Route::get('/about',[MainController::class,'about'])->name('about');
	Route::get('/welcome',[MainController::class,'welcome'])->name('welcome');
	Route::get('/language',[MainController::class,'language'])->name('language');
	Route::get('/volunteers',[MainController::class,'volunteers'])->name('volunteers');
	Route::get('/set-language/{lang}',[MainController::class,'setLanguage'])->name('setLang');
	//Auth
	Route::get('/login',[LoginController::class,'showLogin'])->name('showLogin');
	Route::post('/login',[LoginController::class,'login'])->name('login');
	Route::get('/logout',[LoginController::class,'logout'])->name('logout');
	//Audiobooks
	Route::get('/audiobooks/genres',[BookController::class,'genres'])->name('audiobooks.genres');
	Route::get('/audiobooks/{genre}',[BookController::class,'list'])->name('audiobooks.list');
	Route::get('/test/{id}',[BookController::class,'test']);
	//Podcast
	Route::get('/podcasts/genres',[FrontPodcastController::class,'genres'])->name('podcasts.genres');
	//Training
	Route::get('/trainings/genres',[FrontTrainingController::class,'genres'])->name('trainings.genres');
	//Profile
	Route::get('/profile/history',[ProfileController::class,'history'])->name('profile.history');
});

