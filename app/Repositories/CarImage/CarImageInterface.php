<?php

namespace App\Repositories\CarImage;

interface CarImageInterface {

    public function getCarImages();

    public function findCarImages($id);

    public function addCarImages($car_id, $data);

    public function removeCarImages($car_id);

}