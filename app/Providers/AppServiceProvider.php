<?php

namespace App\Providers;

//AudioBook
use App\Models\AudioBook\Genre\AudioBookGenre;
use App\Models\Podcast\Genre\PodcastGenre;
use App\Models\Training\Genre\TrainingGenre;
use App\Repositories\AudioBookGenreRepository;
use App\Repositories\PodcastGenreRepository;
use App\Repositories\TrainingGenreRepository;
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
        $this->app->bind(PodcastGenreRepository::class,function($app){
            return new PodcastGenreRepository(new PodcastGenre);
        });
        $this->app->bind(TrainingGenreRepository::class,function($app){
            return new TrainingGenreRepository(new TrainingGenre);
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
