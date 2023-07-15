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
        Schema::create('task_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('task_id')->references('id')->on('tasks');
            $table->foreignId('user_id')->references('id')->on('users');
            $table->foreignId('company_id')->references("id")->on("companies")->cascadeOnDelete();
            $table->string('status')->nullable();
            $table->string('email_status')->default(0);
            $table->timestamps();
        });
    }    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_user');
    }
};
