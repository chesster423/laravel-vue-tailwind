<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\CarPersona\CarPersonaRepository;

class CarPersonaController extends Controller
{
    //
    public $car_persona_repo;

    public function __construct(CarPersonaRepository $car_persona_repo) {
        $this->car_persona_repo = $car_persona_repo;
    }

    public function findCarPersona(Request $request) {
        
        $data = [];

        $persona = $this->car_persona_repo->findCarPersona($request->id);

        $data['gender'] = $persona['gender'] ?? null;
        $data['ages'] = (isset($persona['ages'])) ? explode(', ', $persona['ages']) : null;
        $data['personalities'] = (isset($persona['personalities'])) ? explode(', ', $persona['personalities']) : null;
        $data['perks'] = (isset($persona['perks'])) ? explode(', ', $persona['perks']) : null;
        $data['activities'] =  isset($persona['activities']) ? explode(', ', $persona['activities']) : null;

        return $data;

    }
}
