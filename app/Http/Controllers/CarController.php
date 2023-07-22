<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Car\CarRepository;
use App\Repositories\CarImage\CarImageRepository;
use App\Repositories\CarPersona\CarPersonaRepository;
use App\Http\Requests\CarPostRequest;
use App\Services\CarPersonaService;
use App\Services\UserPreferenceService;

use DB;

class CarController extends Controller
{
    //
    public $car;
    public $car_image;
    public $car_persona;
    public $car_persona_service;
    public $user_preference_service;

    public function __construct(CarRepository $car_repo, CarImageRepository $car_image, CarPersonaRepository $car_persona, CarPersonaService $car_persona_service, UserPreferenceService $user_preference_service) {
        $this->car = $car_repo;
        $this->car_image = $car_image;
        $this->car_persona = $car_persona;
        $this->car_persona_service = $car_persona_service;
        $this->user_preference_service = $user_preference_service;
    }

    public function getCars(Request $request) {

        $data = $this->car->getCars()::select('id', 'model', 'model_year', 'car_brand_id', 'vehicle_type_id', 'cost', 'overview', 'is_active','created_at', 'updated_at')
        ->with(['brand' => function($q){
            $q->select('brand_name', 'id');
         }, 'vehicle_type' => function($q){
            $q->select('vehicle_type_name', 'id');
         }])->orderBy('id', 'DESC');

         if(isset($request->filters)) {
            return [];
         }

         $data = $data->get();

        return $data;
        
    }

    public function createCar(CarPostRequest $request) {
   
        $data = $request->all();

        $images = $data['images'] ?? [];
        $persona = $data['persona'] ?? [];

        unset($data['images']);
        unset($data['persona']);

        $id = $this->car->createCar($data)->id;

        if($id) {
            
            $this->car_image->addCarImages($id, $images);

            $this->car_persona->updateOrCreateCarPersona($id, $persona);

            return $id;
        }

        return false;

    }

    public function findCar(Request $request) { 
        
        $data = [];

        $data = $this->car->findCar($request->id);

        $images = $this->car_image->findCarImages($request->id);

        $image_data = [];

        foreach($images as $key => $val) {
            $image_data[] = $val->image_url;
        }


        $data['images'] = $image_data;

        return $data;
    }

    public function updateCar(CarPostRequest $request) {

        $id = $request->id;

        $data = $request->all();

        $images = $data['images'] ?? [];
        $persona = $data['persona'] ?? [];

        unset($data['images']);
        unset($data['persona']);
        unset($data['id']);
        unset($data['deleted_at']);
        unset($data['created_at']);
        unset($data['updated_at']);

        if ($this->car->updateCar($id, $data)) {

            $this->car_image->removeCarImages($id);

            $this->car_image->addCarImages($id, $images);

            $this->car_persona->updateOrCreateCarPersona($id, $persona);

            return true;
        }

        return false;

    }

    public function getRecommendedCars(Request $request) {

        $data = $request->all();
        $clientIP = $request->ip();
 
        if(isset($data['viewOnly']) && $data['viewOnly'] == true) {
          
        }else{
            $this->user_preference_service->saveUserPreference($data, $clientIP);
        }

        $cars = [];

        $cars = $this->car_persona_service->handleRecommendedCars($data);

        return $cars;

    }
}
