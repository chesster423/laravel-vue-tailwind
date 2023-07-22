<?php

namespace App\Services;

use Carbon\CarbonImmutable;
use App\Models\Car;
use App\Models\CarPersona;

class CarPersonaService
{
    public function getCarsBySpendingRange($data, $fields = [])
    {
        $cars = Car::orderBy('id', 'DESC')->whereBetween('cost', $data)
        ->orderBy('cost', 'DESC')
        ->get($fields);

        return $cars;
    }

    public function getCarsByVehicleType($data, $spendingRange, $fields = [])
    {
        $cars = Car::orderBy('id', 'DESC')
        ->whereIn('vehicle_type_id', $data)
        ->whereBetween('cost', $spendingRange)
        ->get($fields);

        return $cars;
    }

    public function getCarsByAge($data, $fields = [])
    {
        $cars = CarPersona::orderBy('id', 'DESC');

        $cars = $cars->age($data)->get($fields);
        
        return $cars;
    }

    public function getCarsByGender($data, $fields = [])
    {
        $cars = CarPersona::orderBy('id', 'DESC');

        $cars = $cars->gender($data)->get($fields);
        
        return $cars;
    }

    public function getCarsByPreference($data, $spendingRange, $fields = [])
    {

        $cars = CarPersona::join('cars AS c', 'c.id', '=', 'car_persona.car_id')
        ->whereBetween('cost', $spendingRange)
        ->where(function($query) use($data) {
            foreach($data as $key => $val) {
                $query->preferences($val);
            }
        });

        $cars = $cars->get();

        return $cars;
    }

    public function getCarsByActivities($data, $spendingRange, $fields = [])
    {

        $cars = CarPersona::join('cars AS c', 'c.id', '=', 'car_persona.car_id')
        ->whereBetween('cost', $spendingRange)
        ->where(function($query) use($data) {
            foreach($data as $key => $val) {
                $query->activities($val);
            }
        });

        $cars = $cars->get();

        return $cars;
    }

    public function getCarsByPersonalities($data, $spendingRange, $fields = [])
    {
        $cars = CarPersona::join('cars AS c', 'c.id', '=', 'car_persona.car_id')
        ->whereBetween('cost', $spendingRange)
        ->where(function($query) use($data) {
            foreach($data as $key => $val) {
                $query->personalities($val);
            }
        });

        $cars = $cars->get();

        return $cars;
    }

    public function getCarsByFuelTypes($data, $spendingRange, $fields = []) {

        $cars = Car::orderBy('id', 'DESC')
        ->whereIn('fuel_type2', $data)
        ->whereBetween('cost', $spendingRange)
        ->get($fields);
        
        return $cars;
    }

    public function getRecommendedCars($ids, $fields = ['id', 'model'])
    {
  
        $cars = Car::select('id', 'model', 'model_year', 'car_brand_id', 'cost', 'vehicle_type_id',  'overview', 'fuel_consumption_combined', 'dealership_url','created_at', 'updated_at')
        ->with(['brand' => function($q){
            $q->select('brand_name', 'id');
         }, 'vehicle_type' => function($q){
            $q->select('vehicle_type_name', 'id');
         }, 'images'])
         ->where('is_active', 1)
         ->whereIn('id', $ids)
         ->orderBy('id', 'DESC');

         if(auth()->check()) {
            $cars = $cars->with('user_saved_cars');
         }

        return $cars->get();
    }

    public function sortRecommendedCars($data, $ids, $spendingRange) {

        $cars = [];

        foreach($data as $key => $value) {

            if(isset($spendingRange[0]) && isset($spendingRange[1]) && $value['cost'] >= $spendingRange[0] && $value['cost'] <= $spendingRange[1]) {
                $cars[ $value['id'] ] = $value;
                $cars[ $value['id'] ]['sort'] = $ids[ $value['id'] ];
            }
        }

        usort($cars, fn($a, $b) => strcmp($a->sort, $b->sort));

        return array_reverse($cars);

    }

    public function handleRecommendedCars($data) {

        // Remove age from the equation
        // $age = $data['ageRange'];
        // $gender = $data['gender'];
        // $cars[] = $this->getCarsByAge($age, ['car_id AS id']);
        // $cars[] = $this->getCarsByGender($gender, ['car_id AS id']);
        
        $personal_preferences = $data['personal_preferences'];
        $personalities = $data['personalities'];
        $preferred_vehicle_types = $data['preferredVehicleTypes'];
        $activities = $data['activities']; 
        $fuelTypes = $data['fuel_types'];       
        $spendingRange = $data['spendingRange'];

        $cars = [];

        if($fuelTypes) {
            $cars[] = $this->getCarsByFuelTypes($fuelTypes, $spendingRange, ['id', 'cost']);
        }
        
        if($preferred_vehicle_types) {
            $cars[] = $this->getCarsByVehicleType($preferred_vehicle_types, $spendingRange, ['id', 'cost']);
        }

        if($personal_preferences) {
            $cars[] = $this->getCarsByPreference($personal_preferences, $spendingRange);
        }
        
        if($activities) {
            $cars[] = $this->getCarsByActivities($activities, $spendingRange);
        }
              
        if($personalities) {
            $cars[] = $this->getCarsByPersonalities($personalities, $spendingRange);
        }

        $cars[] = $this->getCarsBySpendingRange($spendingRange, ['id']);

        $ids = [];

        $car_ids = [];

        foreach($cars as $key => $value) {
            foreach($value as $k => $v) {
                if(!array_key_exists($v['id'], $ids)) {
                    $ids[ $v['id'] ] = 0;
                    array_push($car_ids, $v['id']);
                }
    
                $ids[ $v['id'] ] += 1;
            }
        }

        $response = [
            'grouped_ids' => $ids,
            'raw_ids' => $cars, 
            'car_id' => $car_ids
        ];

        $cars = $this->getRecommendedCars($car_ids);

        $results = $this->sortRecommendedCars($cars, $ids, $spendingRange);

        return $results;
    }

}
