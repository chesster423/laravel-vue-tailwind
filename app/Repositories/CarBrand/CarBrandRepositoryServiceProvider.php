<?php
namespace App\Repositories\CarBrand;

use Illuminate\Support\ServiceProvider;

class CarBrandRepositoryServiceProvider extends ServiceProvider

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

        $this->app->bind('App\Repositories\CarBrand\CarBrandInterface', 'App\Repositories\CarBrand\CarBrandRepository');

    }

}