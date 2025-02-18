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
        Schema::create('prototypes', function (Blueprint $table) {
            $table->id('prototype_id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('project_id')->nullable();
            $table->unsignedBigInteger('creator_id')->nullable();
            $table->unsignedBigInteger('owner_id')->nullable();
            $table->integer('version')->nullable();
            $table->enum('status', ['in_development', 'completed', 'deleted'])->default('in_development');
            $table->timestamps();

            $table->foreign('project_id')->references('project_id')->on('projects');
            $table->foreign('creator_id')->references('id')->on('users');
            $table->foreign('owner_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prototypes');
    }
};
