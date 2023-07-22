<?php
namespace App\Repositories\CarImage;

use Illuminate\Support\ServiceProvider;

class CarImageRepositoryServiceProvider extends ServiceProvider

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

        $this->app->bind('App\Repositories\CarImage\CarImageInterface', 'App\Repositories\CarImage\CarImageRepository');

    }

}