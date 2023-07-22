<?php

namespace App\Repositories\Car;

use App\Repositories\Car\CarInterface as CarInterface;
use App\Models\Car;

use Carbon\Carbon;

class CarRepository implements CarInterface
{

    public $car;

    function __construct(Car $car) {

	  	$this->car = $car;

    }

    public function getCars(){

        return $this->car;
        
    }

    public function createCar($data) {

        return $this->car->create($data);

    }

    public function findCar($id) {
        return $this->car->find($id);
    }

    public function updateCar($id, $data) {

        $car = $this->car->find($id);

        $car = $this->car::where('id', $id)
        ->update($data);

        return $car;

    }

    public function handleCarRecommendation($data) {
        
    }

}
