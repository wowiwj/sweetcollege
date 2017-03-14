<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserInfoForUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('introduction')->nullable();
            $table->string('real_name')->nullable();
            $table->enum('gender', ['male', 'female', 'unselected'])
                ->default('unselected');
            $table->string('city')->nullable();
            $table->timestamp('last_actived_at')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('introduction');
            $table->dropColumn('real_name');
            $table->dropColumn('gender');
            $table->dropColumn('city');
            $table->dropColumn('last_actived_at');
        });
    }
}
