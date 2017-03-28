<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('title');
            $table->text('content');

            //  不要问我为什么是12,任性
            $table->decimal('price',12,2);
            // 任务接单截止日期
            $table->dateTime('expiration_at');
            // 任务完成日期
            $table->dateTime('finished_at')->nullable();
            // 任务失败日期
            $table->dateTime('failed_at')->nullable();

            $table->integer('view_count')->unsigned()->default(0);

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
        Schema::dropIfExists('tasks');
    }
}
