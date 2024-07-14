<?php

namespace App\Http\Controllers;

use App\Models\DefectiveModel;
use App\Models\DeviceModel;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Retrieve total defective count and user count from the database
        $defectiveCount = DefectiveModel::count();
        $totalUserCount = User::count();
        $deviceCount = DeviceModel::count();

        // Retrieve defective count per month for 2024
        $defectivePerMonth = DefectiveModel::select(
            DB::raw('MONTH(created_at) as month'),
            DB::raw('COUNT(*) as count')
        )
        ->whereYear('created_at', 2024)
        ->groupBy(DB::raw('MONTH(created_at)'))
        ->pluck('count', 'month');

        return Inertia::render('Dashboard/Index', [
            'defectiveCount' => $defectiveCount,
            'totalUserCount' => $totalUserCount,
            'deviceCount' => $deviceCount,
            'defectivePerMonth' => $defectivePerMonth,
        ]);
    }
}
