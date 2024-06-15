<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ManageDeviceController extends Controller
{
    //

    public function index(){
        return Inertia::render('ManageDevice/Index');
    }
}
