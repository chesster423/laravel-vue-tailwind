<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarPersona extends Model
{
    protected $table = 'car_persona';
    protected $guarded = [];
    use HasFactory;

    public function car() {
        return $this->belongsTo(Car::class, 'car_id', 'id');
    }

    public function scopeAge($query, $data): void
    {
        $query->orWhere('ages', '=', $data);
    }

    public function scopeGender($query, $data): void
    {
        $query->orWhere('gender', '=', $data);
    }

    public function scopePreferences($query, $data): void
    {
        $query->orWhere('perks', 'like', '%'.$data.'%');
    }

    public function scopeActivities($query, $data): void
    {
        $query->orWhere('activities', 'like', '%'.$data.'%');
    }

    public function scopePersonalities($query, $data): void
    {
        $query->orWhere('personalities', 'like', '%'.$data.'%');
    }

}
