<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('car_brand_id');
            $table->unsignedBigInteger('vehicle_type_id');
            $table->foreign('car_brand_id')->references('id')->on('car_brands');
            $table->foreign('vehicle_type_id')->references('id')->on('vehicle_types');
            $table->string('model')->nullable();
            $table->integer('model_year')->nullable();
            $table->decimal('cost', $precision = 8, $scale = 2)->nullable();
            $table->integer('dimension_length_mm')->nullable();
            $table->integer('dimension_width_mm')->nullable();
            $table->integer('dimension_height_mm')->nullable();
            $table->integer('dimension_ground_clearance_mm')->nullable();
            $table->integer('dimension_kerb_weight_kg')->nullable();
            $table->integer('seat_capacity')->nullable();
            $table->integer('doors')->nullable();
            $table->integer('boot_space_l')->nullable();
            $table->string('engine_type')->nullable();
            $table->string('engine_size')->nullable();
            $table->string('engine_config')->nullable();
            $table->string('engine_cylinders')->nullable();
            $table->string('engine_induction')->nullable();
            $table->string('engine_horsepower')->nullable();
            $table->string('drive_train_transmission')->nullable();
            $table->string('drive_train_type')->nullable();
            $table->string('fuel_type')->nullable();
            $table->integer('fuel_capacity_l')->nullable();
            $table->string('fuel_RON_rating')->nullable();
            $table->string('fuel_consumption_combined')->nullable();
            $table->string('fuel_co2_emission_combined')->nullable();
            $table->string('warranty_coverage')->nullable();
            $table->string('ANCAP_rating')->nullable();
            $table->text('overview')->nullable();
            $table->text('positives')->nullable();
            $table->text('consideration')->nullable();
            $table->text('verdict')->nullable();
            $table->text('features')->nullable();
            $table->enum('status', ['active', 'inactive', 'deleted'])->default('inactive');
            $table->softDeletes($column = 'deleted_at', $precision = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
};
