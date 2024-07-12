<?php

namespace App\Http\Controllers;

use App\Models\DefectiveModel;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Retrieve total defective count and user count from the database
        $defectiveCount = DefectiveModel::count();
        $totalUserCount = User::count();

        return Inertia::render('Dashboard/Index', [
            'defectiveCount' => $defectiveCount,
            'totalUserCount' => $totalUserCount
        ]);
    }

}
