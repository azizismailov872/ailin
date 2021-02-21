<?php

namespace App\Providers;

//AudioBook
use App\Models\User;
use App\Models\Podcast\Podcast;
use App\Services\GenresService;
use App\Services\ContentService;
use App\Services\ResponseFormat;
use App\Models\Training\Training;
use App\Services\AdminUserService;
use App\Models\AdminUser\AdminUser;
use App\Models\AudioBook\AudioBook;
use App\Models\RegisterApplication;
use App\Models\VolunteerApplication;
use App\Repositories\UserRepository;
use App\Repositories\PodcastRepository;
use Illuminate\Support\ServiceProvider;
use App\Repositories\TrainingRepository;
use App\Repositories\AdminUserRepository;
use App\Repositories\AudioBookRepository;
use App\Models\Podcast\Genre\PodcastGenre;
use App\Models\Training\Genre\TrainingGenre;
use App\Repositories\PodcastGenreRepository;
use App\Repositories\TrainingGenreRepository;
use App\Models\AudioBook\Genre\AudioBookGenre;
use App\Repositories\AudioBookGenreRepository;
use App\Repositories\RegisterApplicationRepository;
use App\Repositories\VolunteerApplicationRepository;

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
        $this->app->bind('ContentService', ContentService::class);
        $this->app->bind(AudioBookRepository::class,function($app){
            return new AudioBookRepository(new AudioBook);
        });
        $this->app->bind(PodcastRepository::class,function($app){
            return new PodcastRepository(new Podcast);
        });
        $this->app->bind(AudioBookGenreRepository::class,function($app){
            return new AudioBookGenreRepository(new AudioBookGenre); 
        });
        $this->app->bind(PodcastGenreRepository::class,function($app){
            return new PodcastGenreRepository(new PodcastGenre);
        });
        $this->app->bind(TrainingGenreRepository::class,function($app){
            return new TrainingGenreRepository(new TrainingGenre);
        });
        $this->app->bind(TrainingRepository::class,function($app){
            return new TrainingRepository(new Training);
        });
        $this->app->bind(UserRepository::class,function($app){
            return new UserRepository(new User);
        });
        $this->app->bind(RegisterApplicationRepository::class,function($app){
            return new RegisterApplicationRepository(new RegisterApplication);
        });
        $this->app->bind(AdminUserRepository::class,function($app){
            return  new AdminUserRepository(new AdminUser);
        });
        $this->app->bind(VolunteerApplicationRepository::class,function($app){
            return  new VolunteerApplicationRepository(new VolunteerApplication);
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
