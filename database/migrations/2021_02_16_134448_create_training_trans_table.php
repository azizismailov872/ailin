<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrainingTransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('training_trans', function (Blueprint $table) {
            $table->id();
            $table->string('en_title');
            $table->text('en_description')->nullable();
            $table->string('en_file')->nullable();
            $table->text('en_file_link')->nullable();
            $table->string('kg_title');
            $table->text('kg_description')->nullable();
            $table->string('kg_file')->nullable();
            $table->text('kg_file_link')->nullable();
            $table->string('kz_title');
            $table->text('kz_description')->nullable();
            $table->string('kz_file')->nullable();
            $table->text('kz_file_link')->nullable();
            $table->string('uz_title');
            $table->text('uz_description')->nullable();
            $table->string('uz_file')->nullable();
            $table->text('uz_file_link')->nullable();
            $table->string('tg_title');
            $table->text('tg_description')->nullable();
            $table->string('tg_file')->nullable();
            $table->text('tg_file_link')->nullable();
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
        Schema::dropIfExists('training_trans');
    }
}
