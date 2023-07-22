<?php

namespace App\Repositories\CarBrand;

use App\Repositories\CarBrand\CarBrandInterface as CarBrandInterface;
use App\Models\CarBrand;

use Carbon\Carbon;

class CarBrandRepository implements CarBrandInterface
{

    public $car_brand;

    function __construct(CarBrand $car_brand) {

	  	$this->car_brand = $car_brand;

    }

    public function getCarBrands(){

        return $this->car_brand::orderBy('brand_name', 'ASC')->get();

    }

    public function createCarBrand($data) {

        return $this->car_brand->firstOrCreate($data);

    }

    public function updateCarBrand($data) {

        $car_brand = $this->car_brand->find($data['id']);

        $car_brand->brand_name = $data['brand_name'];

        return $car_brand->save();

    }

}
