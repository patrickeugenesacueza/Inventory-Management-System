<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ManageUserController extends Controller
{
    //

    public function index(){
        return Inertia::render('Manage/Index');
    }
}
