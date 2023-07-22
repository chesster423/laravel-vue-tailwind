<?php

namespace App\Repositories\Activity;

use App\Repositories\Activity\ActivityInterface as ActivityInterface;
use App\Models\Activity;

use Carbon\Carbon;

class ActivityRepository implements ActivityInterface
{

    public $activity;

    function __construct(Activity $activity) {

		$this->activity = $activity;

    }

    public function getActivities(){

        return $this->activity::orderBy('id', 'ASC')->get();

    }

}
