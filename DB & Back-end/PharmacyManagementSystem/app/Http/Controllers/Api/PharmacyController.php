<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pharmacies;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PharmacyController extends Controller
{
    public function show(){

        return Pharmacies::all();

    }
    public function register(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'Pharmacy_Name' => 'required|string|max:255',
            'Address' => 'required|string|max:255',
            'Phone_Number' => 'required|string|max:15',
            'User_Email' => 'required|email|unique:users',
            'User_Password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Start a database transaction
        DB::beginTransaction();

        try {
            // Generate random ID for pharmacy
            $pharmacyId = (string) Str::uuid(); // Generate a UUID as a string

            // Create a new pharmacy
            $pharmacy = Pharmacies::create([
                'Pharmacy_ID' => $pharmacyId,
                'Pharmacy_Name' => $request->Pharmacy_Name,
                'Address' => $request->Address,
                'Phone_Number' => $request->Phone_Number,
            ]);

            // Create a new user
            User::create([
                'User_Email' => $request->User_Email,
                'User_Password' => Hash::make($request->User_Password),
                'User_Type' => 'pharmacy_admin',
                'Pharmacy_ID' => $pharmacyId,
            ]);

            // Commit the transaction
            DB::commit();

            return response()->json(['success' => 'Pharmacy registered successfully.'], 201);
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollBack();
            return response()->json(['error' => 'Registration failed.', 'message' => $e->getMessage()], 500);
        }
    }
}
