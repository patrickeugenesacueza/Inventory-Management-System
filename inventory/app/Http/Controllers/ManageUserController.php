<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManageUserController extends Controller
{
    //

    public function index()
    {
        $userList = User::all();
        return Inertia::render('Manage/Index', ['userList' => $userList]);
    }

    public function create()
    {
        return Inertia::render('Manage/Create');
    }

    public function create_process(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8'
        ]);

        // Hash the password before saving
        $data['password'] = bcrypt($data['password']);

        User::create($data);
        return redirect(route('manageUser.index'));
    }

    public function edit(User $user)
    {
        return Inertia::render('Manage/Edit', ['user' => $user]);
    }

    public function edit_process(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);
    
        // Only update the password if it is provided and not the placeholder
        if ($request->password) {
            $data['password'] = bcrypt($request->password);
        } else {
            unset($data['password']);
        }
    
        $user->update($data);
        return redirect(route('manageUser.index'));
    }

    public function delete_process(User $user)
    {
        $user->delete();
        return redirect(route('manageUser.index'));
    }
    

}
