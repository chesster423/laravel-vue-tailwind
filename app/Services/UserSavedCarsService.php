<?php

namespace App\Services;

use Carbon\CarbonImmutable;
use App\Models\UserSavedCars;
use Carbon\Carbon;

class UserSavedCarsService
{

    public function saveUserCar($request)
    {
        $user_id = auth()->user()->id;

        $data = [
            'user_id' => $user_id,
            'car_id'  => $request['car_id']
        ];

        $record = UserSavedCars::where($data)->first();

        if($record) {
            return $record->delete();
        }

        return UserSavedCars::create($data);

    }

    public function getUserSavedCars() {

        $user_id = auth()->user()->id;

        return UserSavedCars::with(['car' => function($q) {
            $q->with('images');
        }])->where('user_id', $user_id)->orderBy('id', 'DESC')->get();

    }

}
