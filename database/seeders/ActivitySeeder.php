<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('activities')->delete();
        //
        $activities = [
            [
                'activity_name' => 'Off-road adventures',
                'slug'        => 'offroad_adventures',
                'img_path' => ''
            ],
            [
                'activity_name' => 'Long road trips',
                'slug'        => 'road_trips',
                'img_path' => ''
            ],
            [
                'activity_name'  => 'Family activities',
                'slug'        => 'family_activities',
                'img_path' => ''
            ],
            [
                'activity_name' => 'Daily work commute',
                'slug'        => 'daily_work_commute',
                'img_path' => ''
            ],
            [
                'activity_name' => 'Grocery shopping',
                'slug'        => 'grocery_shopping',
                'img_path' => ''
            ],
            [
                'activity_name'  => 'Ride-share driving',
                'slug'        => 'rideshare_driving',
                'img_path' => ''
            ],
            [
                'activity_name'  => 'Race track driving',
                'slug'        => 'race_track_driving',
                'img_path' => ''
            ],
            [
                'activity_name' => 'Handicapped rides ',
                'slug'        => 'handicapped_rides ',
                'img_path' => ''
            ],
            [
                'activity_name'  => 'Towing things around',
                'slug'        => 'towing_things_around',
                'img_path' => ''
            ],
            [
                'activity_name'  => 'Large pets',
                'slug'        => 'large_pets',
                'img_path' => ''
            ],
        ];

        foreach($activities as $k => $val) {
            $activities[$k]['created_at'] = \Carbon\Carbon::now();
            $activities[$k]['updated_at'] = \Carbon\Carbon::now();
        }
        

        DB::table('activities')->insert($activities);

    }
}
