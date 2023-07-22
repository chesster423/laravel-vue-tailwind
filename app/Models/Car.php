<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $table = 'cars';
    protected $guarded = [];
    use HasFactory;

    public function brand() {
        return $this->belongsTo(CarBrand::class, 'car_brand_id', 'id');
    }

    public function vehicle_type() {
        return $this->belongsTo(VehicleType::class, 'vehicle_type_id', 'id');
    }

    public function persona() {
        return $this->hasOne(CarPersona::class, 'car_id', 'id');
    }

    public function images() {
        return $this->hasMany(CarImage::class, 'car_id', 'id');
    }

    public function user_saved_cars() {
        return $this->hasMany(UserSavedCars::class)->where('user_id', auth()->user()->id);
    }
}
