<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrainingGenreTransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('training_genre_trans', function (Blueprint $table) {
            $table->id();
            $table->string('kg_title')->nullable();
            $table->text('kg_description')->nullable();
            $table->string('en_title')->nullable();
            $table->text('en_description')->nullable();
            $table->string('kz_title')->nullable();
            $table->text('kz_description')->nullable();
            $table->string('uz_title')->nullable();
            $table->text('uz_description')->nullable();
            $table->string('tg_title')->nullable();
            $table->text('tg_description')->nullable();
            $table->bigInteger('genre_id')->unsigned();
            $table->foreign('genre_id')->references('id')->on('training_genres')->onDelete('cascade');
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
        Schema::dropIfExists('training_genre_trans');
    }
}
