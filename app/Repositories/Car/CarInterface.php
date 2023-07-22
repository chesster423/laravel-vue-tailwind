<?php

namespace App\Repositories\Car;

interface CarInterface {

    public function getCars();

    public function createCar($data);

    public function updateCar($id, $data);

    public function handleCarRecommendation($data);

}