<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customers; // Ensure the namespace matches
use App\Models\User; // Ensure the User model is correctly imported
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function index(){
        $customers = Customers::all();
        return response()->json($customers);
    }

    public function register(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'Customer_Name' => 'required|string|max:255',
            'Customer_Email' => 'required|email|unique:customers,Customer_Email|unique:users,User_Email',
            'Customer_Password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create customer
        $customer = new Customers();
        $customer->Customer_Name = $request->input('Customer_Name');
        $customer->Customer_Email = $request->input('Customer_Email');
        $customer->Customer_Password = Hash::make($request->input('Customer_Password'));
        $customer->save();

        // Store in users table
        User::create([
            'User_Email' => $request->input('Customer_Email'),
            'User_Password' => Hash::make($request->input('Customer_Password')),
            'User_Type' => 'customer',
            'Customer_ID' => $customer->Customer_ID, // Assuming Customer_ID is generated
        ]);

        return response()->json(['message' => 'Customer registered successfully!'], 201);
    }
}
