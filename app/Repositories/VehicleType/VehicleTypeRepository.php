<?php

namespace App\Repositories\VehicleType;

use App\Repositories\VehicleType\VehicleTypeInterface as VehicleTypeInterface;
use App\Models\VehicleType;

use Carbon\Carbon;

class VehicleTypeRepository implements VehicleTypeInterface
{

    public $model;

    function __construct(VehicleType $vehicle_type) {

		  $this->model = $vehicle_type;

    }

    public function getVehicleTypes(){

        return $this->model::orderBy('id', 'ASC')->get();

    }

}
