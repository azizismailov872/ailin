<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAudiobookTransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audiobook_trans', function (Blueprint $table) {
            $table->id();
            $table->string('en_title')->unique();
            $table->string('en_file')->nullable();
            $table->text('en_desc')->nullable();
            $table->string('kg_title')->unique();
            $table->string('kg_file')->nullable();
            $table->text('kg_desc')->nullable();
            $table->string('kz_title')->unique();
            $table->string('kz_file')->nullable();
            $table->text('kz_desc')->nullable();
            $table->string('uz_title')->unique();
            $table->string('uz_file')->nullable();
            $table->text('uz_desc')->nullable();
            $table->string('tg_title')->unique();
            $table->string('tg_file')->nullable();
            $table->text('tg_desc')->nullable();
            $table->bigInteger('book_id')->unsigned();
            $table->foreign('book_id')->references('id')->on('audiobooks')->onDelete('cascade');
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
        Schema::dropIfExists('audiobook_trans');
    }
}
