<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type_id')->references('id')->on('types');
            $table->foreignId('location_id')->references('id')->on('locations');
            $table->foreignId('company_id')->references('id')->on('companies');
            $table->integer('task_no')->nullable();
            $table->longText('notes')->nullable();
            $table->string('start_date');
            $table->string('start_time');
            $table->string('end_date')->nullable();
            $table->string('end_time')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
