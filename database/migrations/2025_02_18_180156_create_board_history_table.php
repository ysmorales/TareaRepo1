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
        Schema::create('board_history', function (Blueprint $table) {
            $table->id('history_id');
            $table->unsignedBigInteger('prototype_id');
            $table->timestamp('date')->useCurrent();
            $table->json('content_json');
            $table->unsignedBigInteger('edited_by');
            $table->foreign('prototype_id')->references('prototype_id')->on('prototypes');
            $table->foreign('edited_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('board_history');
    }
};
