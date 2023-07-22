<?php
namespace App\Repositories\Car;

use Illuminate\Support\ServiceProvider;

class CarRepositoryServiceProvider extends ServiceProvider

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

        $this->app->bind('App\Repositories\Car\CarInterface', 'App\Repositories\Car\CarRepository');

    }

}