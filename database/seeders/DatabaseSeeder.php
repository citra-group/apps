<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(\ModuleSystem\Seeders\DatabaseSeeder::class);
        $this->call(\ModuleReference\Seeders\DatabaseSeeder::class);
        $this->call(\ModuleHuman\Seeders\DatabaseSeeder::class);
        $this->call(\ModuleCoperative\Seeders\DatabaseSeeder::class);
        $this->call(\ModuleMyCoperative\Seeders\DatabaseSeeder::class);
        $this->call(\ModuleInfrastructure\Seeders\DatabaseSeeder::class);
    }
}
