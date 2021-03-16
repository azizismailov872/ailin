<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('en_title')->after('content');
            $table->text('en_content')->after('en_title');
            $table->string('kg_title')->after('en_content');
            $table->text('kg_content')->after('kg_title');
            $table->string('kz_title')->after('kg_content');
            $table->text('kz_content')->after('kz_title');
            $table->string('uz_title')->after('kz_content');
            $table->text('uz_content')->after('uz_title');
            $table->string('tg_title')->after('uz_content');
            $table->text('tg_content')->after('tg_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn([
                'en_title', 'en_content', 'kg_title','kg_content',
                'kz_title','kz_content','uz_title','uz_content',
                'tg_title','tg_content'
            ]);
        });
    }
}
