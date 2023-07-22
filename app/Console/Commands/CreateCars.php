<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use \App\Models\Car;
use \App\Models\CarBrand;
use \App\Models\VehicleType;

class CreateCars extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cars:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create cars from spreadsheet';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        
        $brands =$this->handleBrandIds();
        $types = $this->handleVehicleTypeIds();

        $cars = [];

        if (($open = fopen(storage_path() . "/app/car-data.csv", "r")) !== FALSE) {

            while (($data = fgetcsv($open, 1000, ",")) !== FALSE) {
                $cars[] = $data;
            }

            fclose($open);
        }

        $columns = $cars[0];
        unset($columns[0]);
        unset($cars[0]);
        
        $data = [];

        $replacements = ['dimension_length_mm', 'dimension_width_mm', 'dimension_height_mm', 'dimension_ground_clearance_mm', 'dimension_kerb_weight_kg', 'fuel_capacity_l'];

        foreach($cars as $key => $value) {
            foreach($value as $k => $v) {

                if($v && $v != 'Wagon' && $v != 'People Mover') {

                    if(in_array($columns[ $k ], $replacements)) {
                        $find = array(" mm"," L", " kg");
                        $v = (int)str_replace($find, "", $v);
                    }

                    if(in_array($columns[ $k ], ['doors', 'seat_capacity'])) {
                        $v = (int)$v;
                    }

                    $data[ $key ][ $columns[ $k ]  ] = $v;
                    unset($data[$key]['id']);
                
                    switch ($columns[ $k ]) {
                        case 'car_brand_id':
                            $data[ $key ]['car_brand_id'] = $brands[ $v ];
                            break;
                        case 'vehicle_type_id':
                            $data[ $key ]['vehicle_type_id'] = $types[ $v ];
                            break;
                        
                        default:
                            # code...
                            break;
                    }
                }                                   
            }
        }

        $bar = $this->output->createProgressBar(count($data));
        $bar->start();

        $aa = [];
        foreach($data as $key => $value) {
            if(isset($value['vehicle_type_id'])) {
                Car::insert($value);
            }
            
        }

        dd($aa);
    
        $bar->finish();
    }

    public function handleBrandIds() {

        $brands_data = CarBrand::get()->toArray();
    
        $brands = [];
        
        foreach($brands_data as $key => $value) {
            $brands[ $value['brand_name'] ] = $value['id'];
        }

        return $brands;

    }

    public function handleVehicleTypeIds() {

        $types_data = VehicleType::get()->toArray();
    
        $types = [];
        
        foreach($types_data as $key => $value) {
            $types[ $value['vehicle_type_name'] ] = $value['id'];
        }

        return $types;

    }
}
