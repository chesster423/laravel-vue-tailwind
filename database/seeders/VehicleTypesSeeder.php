<?php
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class VehicleTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $activities = [
            [
                'vehicle_type_name'        => 'Coupe',
                'slug'        => 'coupe',
                'img_path'    => 'images/funnels/step-5/coupe.png',
            ],
            [
                'vehicle_type_name'        => 'Ute',
                'slug'        => 'ute',
                'img_path'    => 'images/funnels/step-5/ute.png',
            ],
            [
                'vehicle_type_name'        => 'Wagon',
                'slug'        => 'wagon',
                'img_path'    => 'images/funnels/step-5/wagon.png',
            ],
            [
                'vehicle_type_name'        => 'Van',
                'slug'        => 'van',
                'img_path'    => 'images/funnels/step-5/van.png',
            ],
            [
                'vehicle_type_name'        => 'SUV',
                'slug'        => 'suv',
                'img_path'    => 'images/funnels/step-5/suv.png',
            ],
            [
                'vehicle_type_name'        => 'Hatchback',
                'slug'        => 'hatchback',
                'img_path'    => 'images/funnels/step-5/hatchback.png',
            ],
            [
                'vehicle_type_name'        => 'Sedan',
                'slug'        => 'sedan',
                'img_path'    => 'images/funnels/step-5/sedan.png',
            ],
            [
                'vehicle_type_name'        => 'Mini Van',
                'slug'        => 'mini_van',
                'img_path'    => 'images/funnels/step-5/mini-van.png',
            ],
            [
                'vehicle_type_name'        => 'Micro',
                'slug'        => 'micro',
                'img_path'    => 'images/funnels/step-5/micro.png',
            ],
            [
                'vehicle_type_name'        => 'Wagon',
                'slug'        => 'wagon',
                'img_path'    => 'images/funnels/step-5/wagon.png',
            ],

        ];

        foreach($activities as $k => $val) {
            $activities[$k]['created_at'] = \Carbon\Carbon::now();
            $activities[$k]['updated_at'] = \Carbon\Carbon::now();
        }
        

        DB::table('vehicle_types')->insert($activities);

    }
}
