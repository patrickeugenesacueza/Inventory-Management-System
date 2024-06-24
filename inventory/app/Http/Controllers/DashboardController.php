<?php

namespace App\Http\Controllers;

use App\Models\DefectiveModel;
use Inertia\Inertia;

class DashboardController extends Controller
{
public function index()
{
    // Retrieve total defective count from the database
    $defectiveCount = DefectiveModel::count();

    return Inertia::render('Dashboard/Index', ['defectiveCount' => $defectiveCount]);
}

}
