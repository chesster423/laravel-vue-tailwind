<?php

namespace App\Repositories\UserPreference;

interface UserPreferenceInterface {

    public function getUserPreferences();

    public function createUserPreference($data);

}