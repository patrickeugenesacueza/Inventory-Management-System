<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ManageDeviceController;
use App\Http\Controllers\ManageUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Manage User Route
    Route::get('/manage', [ManageUserController::class, 'index'])->name('manageUser.index');
    Route::get('/manage/create', [ManageUserController::class, 'create'])->name('manageUser.create');
    Route::post('/manage/create_process', [ManageUserController::class, 'create_process'])->name('manageUser.create_process');
    Route::get('/manage/edit/{user}', [ManageUserController::class, 'edit'])->name('manageUser.edit');
    Route::put('/manage/edit_process/{user}', [ManageUserController::class, 'edit_process'])->name('manageUser.edit_process');
    Route::delete('/manage/delete_process/{user}', [ManageUserController::class, 'delete_process'])->name('manageUser.delete_process');

    // Manage Device Route
    Route::get('/manageDevice', [ManageDeviceController::class, 'index'])->name('manageDevice.index');
    Route::get('/manageDevice/AddDevice', [ManageDeviceController::class, 'createDevice'])->name('manageDevice.createDevice');
    Route::post('/manageDevice/AddDevice_process', [ManageDeviceController::class, 'createDeviceProcess'])->name('manageDevice.createDeviceProcess');
    Route::get('/manageDevice/edit/{device}', [ManageDeviceController::class, 'edit'])->name('manageDevice.edit');
    Route::put('/manageDevice/update/{device}', [ManageDeviceController::class, 'update'])->name('manageDevice.update');
    Route::post('/manageDevice/moveToDefective/{device}', [ManageDeviceController::class, 'moveToDefective'])->name('manageDevice.moveToDefective');

    Route::get('/manageDevice/Defective', [ManageDeviceController::class, 'DefectivePage'])->name('manageDevice.defectivePage');
    Route::post('/manage-device/redo-from-defective/{id}', [ManageDeviceController::class, 'redoFromDefective'])->name('manageDevice.redoFromDefective');

    Route::get('/Monitor', [DashboardController::class, 'index'])->name('monitor.index');
});

require __DIR__.'/auth.php';
