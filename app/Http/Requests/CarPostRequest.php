<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->hasOneRole(config('roles.models.role')::whereName('Super Admin')->first('id')->id);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'car_brand_id' => 'required',
            'vehicle_type_id' => 'required',
            'model' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'car_brand_id.required' => 'Brand Name is required',
            'vehicle_type_id.required' => 'Vehicle Type is required.',
        ];
    }
}
