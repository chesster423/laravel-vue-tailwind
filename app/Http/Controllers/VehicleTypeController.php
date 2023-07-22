<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\VehicleType\VehicleTypeRepository;
use App\Models\VehicleType;

class VehicleTypeController extends Controller
{
    //
    public $vehicle_type;

    function __construct(VehicleTypeRepository $vehicle_type_repo) {

        $this->vehicle_type = $vehicle_type_repo;

    }

    public function getVehicleTypes(){

        $data = $this->vehicle_type->getVehicleTypes();

        foreach($data as $key => $value) {
            $data[$key]->selected = false;
        }

        return $data;

    }
}
