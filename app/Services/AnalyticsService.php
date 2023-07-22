<?php

namespace App\Services;

use Carbon\CarbonImmutable;
use App\Models\UserPreference;
use Carbon\Carbon;

class AnalyticsService
{

    public function getFunnelsReport($request)
    {
        $payload = $request->all();

        $dates = $payload['date_range'];

        $preferences = UserPreference::whereBetween('created_at', $dates)->get();

        $data = $this->handleGraphData($preferences);

        return $data;

    }

    public function handleGraphData($data) {

        $results = [
            'gender' => [],
            'ages' => [],
            'personalities' => [],
            'perks' => [],
            'activities' => [],
            'fuel_types' => [],
            'vehicle_types' => [],
            'spendingRange' => [
                'min' => 0,
                'max' => 0
            ],
        ];
        
        $preferences_data = $data;

        foreach($preferences_data as $key => $value) {

            foreach($value->toArray() as $k => $v) {

                switch ($k) {
                    case 'gender':
                        # code...
                    break;

                    case 'ages':
                        if (!array_key_exists($v, $results['ages'])) {
                            $results['ages'][$v] = 0;
                        }
                        $results['ages'][$v] += 1;
                    break;

                    case 'personalities':
                        if($personalities = explode(', ', $v)) {
                            foreach($personalities as $personality) {
                                if (!array_key_exists($personality, $results['personalities'])) {
                                    $results['personalities'][$personality] = 0;
                                }
                                $results['personalities'][$personality] += 1;
                            }
                        }
                    break;
                    case 'perks':
                        if($perks = explode(', ', $v)) {
                            foreach($perks as $perk) {
                                if (!array_key_exists($perk, $results['perks'])) {
                                    $results['perks'][$perk] = 0;
                                }
                                $results['perks'][$perk] += 1;
                            }
                        }
                    break;
                    case 'activities':
                        if($activities = explode(', ', $v)) {
                            foreach($activities as $activity) {
                                if (!array_key_exists($activity, $results['activities'])) {
                                    $results['activities'][$activity] = 0;
                                }
                                $results['activities'][$activity] += 1;
                            }
                        }
                    break;
                    case 'fuel_types':
                        if($fuel_types = explode(', ', $v)) {
                            foreach($fuel_types as $fuel_type) {
                                if (!array_key_exists($fuel_type, $results['fuel_types'])) {
                                    $results['fuel_types'][$fuel_type] = 0;
                                }
                                $results['fuel_types'][$fuel_type] += 1;
                            }
                        }
                    break;
                    case 'vehicle_types':
                        if($vehicle_types = explode(', ', $v)) {
                            foreach($vehicle_types as $vehicle_type) {
                                if (!array_key_exists($vehicle_type, $results['vehicle_types'])) {
                                    $results['vehicle_types'][$vehicle_type] = 0;
                                }
                                $results['vehicle_types'][$vehicle_type] += 1;
                            }
                        }
                    break;
                    case 'spendingRange':
                        if($spendingRange = explode('-', $v)) {
                            $results['spendingRange']['min'] += (int)$spendingRange[0] ?? 0;
                            $results['spendingRange']['max'] += (int)$spendingRange[1] ?? 0;
                        }
                    break;

                    default:
                        # code...
                        break;
                }
            }

        }

        return $results;

    }

}
