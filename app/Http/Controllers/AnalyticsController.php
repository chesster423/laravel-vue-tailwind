<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AnalyticsService;

class AnalyticsController extends Controller
{
    //
    public $analytics;

    public function __construct(AnalyticsService $analytics) {
        $this->analytics = $analytics;
    }

    public function getFunnelsReport(Request $request) {
        return $this->analytics->getFunnelsReport($request);
    }
}
