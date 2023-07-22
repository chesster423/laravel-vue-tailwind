<?php

namespace App\Repositories\CarPersona;

interface CarPersonaInterface {

    public function findCarPersona($id);

    public function updateOrCreateCarPersona($car_id, $data);

}