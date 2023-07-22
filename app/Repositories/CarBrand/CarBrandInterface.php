<?php

namespace App\Repositories\CarBrand;

interface CarBrandInterface {

    public function getCarBrands();

    public function createCarBrand($data);

    public function updateCarBrand($data);

}