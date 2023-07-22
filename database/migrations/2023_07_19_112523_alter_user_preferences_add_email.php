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
        Schema::table('user_preferences', function(Blueprint $table)
        {
            $table->bigInteger('user_id')->unsigned()->nullable()->change();
            $table->string('email')->after('user_id')->nullable();
            $table->string('ip_address')->after('email')->nullable();
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
        Schema::table('user_preferences', function($table) {
            $table->dropColumn('email');
            $table->dropColumn('ip_address');
        });
    }
};
