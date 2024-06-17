<?php

namespace App\Http\Controllers;

use App\Models\DeviceModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManageDeviceController extends Controller
{
    //

    public function index(){
        $itemList = DeviceModel::all();
        return Inertia::render('ManageDevice/Index', ['itemList' => $itemList]);
    }

    public function createDevice(){
        return Inertia::render('ManageDevice/CreateDevice');
    }

    public function createDeviceProcess(Request $request){
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
}
