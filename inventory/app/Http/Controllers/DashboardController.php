<?php

namespace App\Http\Controllers;

use App\Models\DefectiveModel;
use App\Models\DeviceModel;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Retrieve total defective count and user count from the database
        $defectiveCount = DefectiveModel::count();
        $totalUserCount = User::count();
        $deviceCount = DeviceModel::count();

        // Retrieve monthly defective and device counts
        $defectivePerMonth = DefectiveModel::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                                           ->whereYear('created_at', 2024)
                                           ->groupBy('month')
                                           ->pluck('count', 'month')
                                           ->toArray();

        $devicePerMonth = DeviceModel::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                                     ->whereYear('created_at', 2024)
                                     ->groupBy('month')
                                     ->pluck('count', 'month')
                                     ->toArray();

        return Inertia::render('Dashboard/Index', [
            'defectiveCount' => $defectiveCount,
            'totalUserCount' => $totalUserCount,
            'deviceCount' => $deviceCount,
            'defectivePerMonth' => $defectivePerMonth,
            'devicePerMonth' => $devicePerMonth,
        ]);
    }
}
