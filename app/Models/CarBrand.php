<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarBrand extends Model
{
    protected $table = "car_brands";
    protected $guarded = [];
    use HasFactory;
}
