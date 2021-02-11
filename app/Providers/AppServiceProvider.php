<?php

namespace App\Providers;

//AudioBook
use App\Models\AudioBook\Genre\AudioBookGenre;
use App\Repositories\AudioBookGenreRepository;
use App\Services\AdminUserService;
use App\Services\GenresService;
use App\Services\ResponseFormat;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('ResponseFormat',ResponseFormat::class);
        $this->app->bind('AdminUserService',AdminUserService::class);
        $this->app->bind('GenresService', GenresService::class);
        $this->app->bind(AudioBookGenreRepository::class,function($app){
            return new AudioBookGenreRepository(new AudioBookGenre); 
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
