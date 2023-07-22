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
        //
        Schema::table('cars', function($table) {
            $table->enum('fuel_type2', ['petrol_diesel', 'hybrid', 'plugin_hybrid', 'electric'])->nullable()->after('fuel_type');
            $table->string('dealership_url')->after('features')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('cars', function($table) {
            $table->dropColumn('dealership_url');
        });
    }
};
