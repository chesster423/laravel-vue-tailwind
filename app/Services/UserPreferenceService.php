<?php

namespace App\Services;

use Carbon\CarbonImmutable;
use App\Repositories\UserPreference\UserPreferenceRepository;
use App\Models\UserPreference;
use Carbon\Carbon;

class UserPreferenceService
{

    public $user_preference;

    public function __construct(UserPreferenceRepository $user_preference) {
        $this->user_preference = $user_preference;
    }

    public function saveUserPreference($request, $ip_address = null)
    {

        $spendingRange = ($request['spendingRange']) ? $request['spendingRange'][0] . '-' . $request['spendingRange'][1] : null;

        $user_id = auth()->user()->id ?? null;
        $email = $request['email'] ?? null;

        $gender = $request['data'] ?? null;
        $ages = $request['ageRange'] ?? null;
        $personalities = ($request['personalities']) ? implode(', ', $request['personalities']) : null;
        $perks = ($request['personal_preferences']) ? implode(', ', $request['personal_preferences']) : null;
        $activities = ($request['activities']) ? implode(', ', $request['activities']) : null;
        $fuel_types = ($request['fuel_types']) ? implode(', ', $request['fuel_types']) : null;
        $vehicle_types = ($request['preferredVehicleTypes']) ? implode(', ', $request['preferredVehicleTypes']) : null;

        $data = [
            'user_id' => $user_id,
            'email' => $email,
            'ip_address' => $ip_address,
            'gender' => $gender,
            'ages' => $ages,
            'personalities' => $personalities,
            'perks' => $perks,
            'activities' => $activities,
            'fuel_types' => $fuel_types,
            'vehicle_types' => $vehicle_types,
            'spendingRange' => $spendingRange
        ];

        $record = UserPreference::where($data)->whereDate('created_at', Carbon::today());

        if($email) {
            $record = $record->where('email', $email);
        }

        $record = $record->get()->count();

        if(!$record) {
            return $this->user_preference->createUserPreference($data);
        }
        
        return false;
    }

    public function getUserLatestPreference() {

        return $this->user_preference->getUserPreferences()->first();

    }
}
