<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserSavedCarsService;
use App\Services\UserPreferenceService;

class UserSavedCarsController extends Controller
{
    public $user_saved_cars;
    public $user_preference;
    //
    public function __construct(UserSavedCarsService $user_saved_cars, UserPreferenceService $user_preference) {
        $this->user_saved_cars = $user_saved_cars;
        $this->user_preference = $user_preference;
    }

    public function saveUserCar(Request $request) {
        return $this->user_saved_cars->saveUserCar($request);
    }

    public function getUserSavedCars(Request $request) {

        return $this->user_saved_cars->getUserSavedCars();
        
    }

    public function getUserLatestPreference(Request $request) {

        return $this->user_preference->getUserLatestPreference() ?? [];

    }

}
