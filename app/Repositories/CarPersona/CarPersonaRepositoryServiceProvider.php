<?php
namespace App\Repositories\CarPersona;

use Illuminate\Support\ServiceProvider;

class CarPersonaRepositoryServiceProvider extends ServiceProvider

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

        $this->app->bind('App\Repositories\CarPersona\CarPersonaInterface', 'App\Repositories\CarPersona\CarPersonaRepository');

    }

}