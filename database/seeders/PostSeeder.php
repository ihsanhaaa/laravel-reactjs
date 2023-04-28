<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 15; $i++) {
            DB::table('posts')->insert([
                'title' => fake()->title,
                'content' => fake()->paragraph(2, true),
            ]);
        }
    }
}
