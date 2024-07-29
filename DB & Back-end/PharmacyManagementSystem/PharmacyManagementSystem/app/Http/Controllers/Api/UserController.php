<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Users;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        $users = Users::all();
        return response()->json($users);
    }

    public function show($id)
    {
        $user = Users::find($id);
        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'User_Password' => 'required',
            'User_Email' => 'required|email',
            'User_Type' => 'required',
            'Pharmacy_ID' => 'nullable|integer',
        ]);
    
        // Hash the password
        $request->merge([
            'User_Password' => Hash::make($request->User_Password),
        ]);
    
        $user = Users::create($request->all());
        return response()->json($user, 201);
    }
    

    public function update(Request $request, $id)
    {
        $user = Users::find($id);
        if ($user) {
            $user->update($request->all());
            return response()->json($user);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function destroy($id)
    {
        $user = Users::find($id);
        if ($user) {
            $user->delete();
            return response()->json(['message' => 'User deleted']);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function login(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'User_Email' => 'required|email',
            'User_Password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Check user existence
        $user = Users::where('User_Email', $request->User_Email)->first();

        // Check password and return response
        if ($user && Hash::check($request->User_Password, $user->User_Password)) {
            return response()->json([
                'message' => 'Login successful',
                'userType' => $user->User_Type, // Return user type
                'user' => $user
            ], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
}
