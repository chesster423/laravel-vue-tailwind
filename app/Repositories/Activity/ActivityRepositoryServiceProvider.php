<?php
namespace App\Repositories\Activity;

use Illuminate\Support\ServiceProvider;

class ActivityRepositoryServiceProvider extends ServiceProvider

{

    /**
    * Bootstrap the application services.
    *
    * @return void
    */
    public function boot(){

    }

    /**
    * Register the application services.
    *
    * @return void
    */
    public function register(){

        $this->app->bind('App\Repositories\Activity\ActivityInterface', 'App\Repositories\Activity\ActivityRepository');

    }

}