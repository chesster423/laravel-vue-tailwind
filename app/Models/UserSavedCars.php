<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSavedCars extends Model
{
    protected $table = 'user_saved_cars';
    protected $guarded;
    use HasFactory;

    public function car() {
        return $this->belongsTo(Car::class, 'car_id', 'id');
    }
}
