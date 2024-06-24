<?php

namespace App\Http\Controllers;

use App\Models\DefectiveModel;
use App\Models\DeviceModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class ManageDeviceController extends Controller
{
    //

    public function index()
    {
        $itemList = DeviceModel::all();
        return Inertia::render('ManageDevice/Index', ['itemList' => $itemList]);
    }

    public function createDevice()
    {
        return Inertia::render('ManageDevice/CreateDevice');
    }

    public function createDeviceProcess(Request $request)
    {
        $data = $request->validate([
            'category' => 'required',
            'product' => 'required',
            'sn' => 'required',
            'price' => 'required|numeric',
            'personnel' => 'required'
        ]);

        DeviceModel::create($data);
        return redirect(route('manageDevice.index'));
    }

    public function edit(DeviceModel $device)
    {
        return Inertia::render('ManageDevice/Edit', ['device' => $device]);
    }

    public function update(Request $request, DeviceModel $device)
    {
        $data = $request->validate([
            'category' => 'required',
            'product' => 'required',
            'sn' => 'required',
            'price' => 'required|numeric',
            'personnel' => 'required'
        ]);

        $device->update($data);
        return redirect(route('manageDevice.index'));
    }
    public function moveToDefective(Request $request, $id)
    {
        $device = DeviceModel::findOrFail($id);

        // Ensure that no field is null
        if (!$device->category || !$device->product || !$device->sn || !$device->price || !$device->personnel) {
            return redirect()->route('manageDevice.index')->withErrors('One or more fields are null');
        }

        DefectiveModel::create([
            'category' => $device->category,
            'product' => $device->product,
            'sn' => $device->sn,
            'price' => $device->price,
            'personnel' => $device->personnel,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Delete the original device record
        $device->delete();

        return redirect()->route('manageDevice.index');
    }


    public function DefectivePage(){
        $itemList = DefectiveModel::all();
        return Inertia::render('ManageDevice/Defective', ['itemList' => $itemList]);
    }

    public function redoFromDefective($id)
    {
        // Find the defective item by ID
        $defectiveItem = DefectiveModel::findOrFail($id);

        // Create a new device record with the data from the defective item
        DeviceModel::create([
            'category' => $defectiveItem->category,
            'product' => $defectiveItem->product,
            'sn' => $defectiveItem->sn,
            'price' => $defectiveItem->price,
            'personnel' => $defectiveItem->personnel,
        ]);

        // Delete the defective item
        $defectiveItem->delete();

        // Redirect back to the defective items page with a success message
        return redirect()->route('manageDevice.defectivePage')->with('success', 'Device has been moved back to the devices table.');
    }
}
