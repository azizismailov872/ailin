<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrainingVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('training_videos', function (Blueprint $table) {
            $table->id();    
            $table->string('ru_video')->nullable();
            $table->text('ru_video_link')->nullable();
            $table->string('en_video')->nullable();
            $table->text('en_video_link')->nullable();
            $table->string('kg_video')->nullable();
            $table->text('kg_video_link')->nullable();
            $table->string('kz_video')->nullable();
            $table->text('kz_video_link')->nullable();
            $table->string('uz_video')->nullable();
            $table->text('uz_video_link')->nullable();
            $table->string('tg_video')->nullable();
            $table->text('tg_video_link')->nullable();
            $table->bigInteger('training_id')->unsigned();
            $table->foreign('training_id')->references('id')->on('trainings')->onDelete('cascade');
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
        Schema::dropIfExists('training_videos');
    }
}
