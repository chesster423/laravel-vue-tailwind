<?php

namespace App\Repositories\UserPreference;

use App\Repositories\UserPreference\UserPreferenceInterface as UserPreferenceInterface;
use App\Models\UserPreference;

use Carbon\Carbon;

class UserPreferenceRepository implements UserPreferenceInterface
{

    public $user_preference;

    function __construct(UserPreference $user_preference) {

	  	$this->user_preference = $user_preference;

    }

    public function getUserPreferences(){

        $user_id = auth()->user()->id;

        return $this->user_preference::where('user_id', $user_id)->orderBy('id', 'DESC');
        
    }

    public function createUserPreference($data) {

        return $this->user_preference::create($data);

    }

}
