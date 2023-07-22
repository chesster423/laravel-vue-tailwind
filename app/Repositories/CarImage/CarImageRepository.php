<?php

namespace App\Repositories\CarImage;

use App\Repositories\CarImage\CarImageInterface as CarImageInterface;
use App\Models\CarImage;

use Carbon\Carbon;

class CarImageRepository implements CarImageInterface
{

    public $car_image;

    function __construct(CarImage $car_image) {

	  	$this->car_image = $car_image;

    }

    public function getCarImages(){

        return $this->car_image::orderBy('id', 'DESC')->get();

    }

    public function findCarImages($id) {

        return $this->car_image::where('car_id', $id)->orderBy('image_order', 'ASC')->get();

    }

    public function addCarImages($car_id, $images){

        $data = [];

        foreach ($images as $key => $value) {
            if(!is_null($value) || $value != '') {
                $data[] = [
                    'car_id'  => $car_id,
                    'image_url' => $value,
                    'image_order' => $key
                ];
            }            
        }

        $this->car_image::insert($data);

        return false;
    }

    public function removeCarImages($id) {

        return $this->car_image::where('car_id', $id)->delete();

    }


}
