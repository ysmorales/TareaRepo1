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
        Schema::create('user_permissions', function (Blueprint $table) {
            $table->id('permission_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('resource_type_id');
            $table->unsignedBigInteger('resource_id');
            $table->unsignedBigInteger('permission_level_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('resource_type_id')->references('resource_type_id')->on('resource_types');
            $table->foreign('permission_level_id')->references('permission_level_id')->on('permission_levels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_permissions');
    }
};
