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
        Schema::create('permissions_by_resource_type', function (Blueprint $table) {
            $table->id('resource_permission_id');
            $table->unsignedBigInteger('resource_type_id');
            $table->unsignedBigInteger('permission_level_id');
            $table->json('allowed_actions');
            $table->timestamps();

            $table->foreign('resource_type_id')->references('resource_type_id')->on('resource_types');
            $table->foreign('permission_level_id')->references('permission_level_id')->on('permission_levels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permissions_by_resource_type');
    }
};
