<?php

namespace App\Repositories\CarPersona;

use App\Repositories\CarPersona\CarPersonaInterface as CarPersonaInterface;
use App\Models\CarPersona;

use Carbon\Carbon;

class CarPersonaRepository implements CarPersonaInterface
{

    public $car_persona;

    function __construct(CarPersona $car_persona) {

	  	$this->car_persona = $car_persona;

    }

    public function findCarPersona($id) {

        return $this->car_persona::where('car_id', $id)->orderBy('id', 'ASC')->first();

    }

    public function updateOrCreateCarPersona($car_id, $data) {

        $payload = [];

        $payload = [
            'gender' => $data['gender'] ?? null,
            'ages'  => (isset($data['ages'])) ? implode(', ', $data['ages']) : null,
            'personalities' => (isset($data['personalities'])) ? implode(', ', $data['personalities']) : null,
            'perks' => (isset($data['perks'])) ? implode(', ', $data['perks']) : null,
            'activities' => (isset($data['activities'])) ? implode(', ', $data['activities']) : null,
        ];

        return $this->car_persona::updateOrCreate(
            ['car_id' => $car_id],
            $payload
        );

    }

}
