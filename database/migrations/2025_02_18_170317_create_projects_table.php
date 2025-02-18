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
        Schema::create('projects', function (Blueprint $table) {
            $table->id('project_id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('group_id')->nullable();
            $table->unsignedBigInteger('creator_id')->nullable();
            $table->unsignedBigInteger('owner_id')->nullable();
            $table->enum('status', ['in_progress', 'completed', 'deleted'])->default('in_progress');
            $table->integer('estimated_time')->nullable();
            $table->timestamps();

            $table->foreign('group_id')->references('group_id')->on('groups');
            $table->foreign('creator_id')->references('id')->on('users');
            $table->foreign('owner_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
