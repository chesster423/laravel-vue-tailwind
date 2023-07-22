<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Activity\ActivityRepository;


class ActivityController extends Controller
{
    //
    public $activity;
    //
    public function __construct(ActivityRepository $activityRepository)
    {
        $this->activity = $activityRepository;
    }

    public function getActivities(Request $request) {

        $data = $this->activity->getActivities();

        foreach($data as $key => $value) {
            $data[$key]->selected = false;
        }

        return $data;

    }
}
