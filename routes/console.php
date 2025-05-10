<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('coperative:generate-wajib')->daily();
