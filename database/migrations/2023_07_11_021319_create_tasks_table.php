<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('task_id')->references('id')->on('types');
            $table->integer('task_no')->nullable();
            $table->integer('location_id')->unsigned();
            $table->longText('notes')->nullable();
            $table->string('start_date');
            $table->string('start_time');
            $table->string('end_date')->nullable();
            $table->string('end_time')->nullable();
            $table->string('company')->nullable();
            $table->string('status')->nullable();

            $table->foreign('location_id')->references('id')->on('locations');
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
        Schema::dropIfExists('tasks');
    }
};


    /**
     * Run the migrations.
     *
     */

