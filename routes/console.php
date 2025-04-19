<?php

use Illuminate\Support\Facades\Schedule;

class ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('coperative:generate-wajib')->daily();
    }
}
