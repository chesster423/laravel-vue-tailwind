<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CarBrandPostRequest;
use App\Repositories\CarBrand\CarBrandRepository;
use App\Models\CarBrand;

class CarBrandController extends Controller
{
    //
    public $car_brand;

    function __construct(CarBrandRepository $car_brand_repo) {

        $this->car_brand = $car_brand_repo;

    }

    public function getCarBrands(){

        $data = $this->car_brand->getCarBrands();
        return $data;

    }

    public function createCarBrand(CarBrandPostRequest $request) {

        $id = $this->car_brand->createCarBrand($request->all())->id;

        if($id) {
            return $id;
        }
        
    }

    public function updateCarBrand(CarBrandPostRequest $request) {

        return $this->car_brand->updateCarBrand($request->all());

    }
}
