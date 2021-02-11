<?php

use App\Http\Controllers\Admin\AudioBook\AudioBookController;
use App\Http\Controllers\Admin\AudioBook\Genre\AudioBookGenreController;
use App\Http\Controllers\Admin\Auth\AuthController;
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
	Route::get('/audiobooks/list',[AudioBookGenreController::class,'list']);
	Route::get('/audiobooks/one/{id}',[AudioBookGenreController::class,'one']);
	Route::get('/audiobooks/delete/{id}',[AudioBookGenreController::class,'delete']);
	Route::post('/audiobooks/search',[AudioBookGenreController::class,'search']);
	Route::post('/audiobooks/create',[AudioBookGenreController::class,'create']);
	Route::post('/audiobooks/update/{id}',[AudioBookGenreController::class,'update']);
	
});

Route::get('/{path?}',function(){
        return view('admin');
})->where(['path' => '.*']);



