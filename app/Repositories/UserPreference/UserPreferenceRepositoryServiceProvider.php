<?php
namespace App\Repositories\UserPreference;

use Illuminate\Support\ServiceProvider;

class UserPreferenceRepositoryServiceProvider extends ServiceProvider

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

        $this->app->bind('App\Repositories\UserPreference\UserPreferenceInterface', 'App\Repositories\UserPreference\UserPreferenceRepository');

    }

}