<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function show($id)
    {
        $product = Products::find($id);
        if ($product) {
            return response()->json($product);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Pharmacy_ID' => 'required|integer',
            'Product_Name' => 'required|string',
            'Description' => 'required|string',
            'Price' => 'required|numeric',
            'Expiry_Date' => 'required|date',
            'Category_Id' => 'required|integer',
            'Quantity' => 'required|integer',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('public/images'), $imageName);
            $imagePath = 'public/images/' . $imageName;
        }

        $product = new Products();
        $product->Pharmacy_ID = $request->Pharmacy_ID;
        $product->Product_Name = $request->Product_Name;
        $product->Description = $request->Description;
        $product->Price = $request->Price;
        $product->Expiry_Date = $request->Expiry_Date;
        $product->Category_Id = $request->Category_Id;
        $product->Quantity = $request->Quantity;
        $product->image = $imagePath ?? null;
        $product->Is_deleted = 0;
        $product->save();

        return response()->json(['message' => 'Product created successfully!'], 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Pharmacy_ID' => 'required|integer',
            'Product_Name' => 'required|string',
            'Description' => 'required|string',
            'Price' => 'required|numeric',
            'Expiry_Date' => 'required|date',
            'Category_Id' => 'required|integer',
            'Quantity' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $product = Products::find($id);
        if ($product) {
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('public/images'), $imageName);
                $imagePath = 'public/images/' . $imageName;
            }

            $product->Pharmacy_ID = $request->Pharmacy_ID;
            $product->Product_Name = $request->Product_Name;
            $product->Description = $request->Description;
            $product->Price = $request->Price;
            $product->Expiry_Date = $request->Expiry_Date;
            $product->Category_Id = $request->Category_Id;
            $product->Quantity = $request->Quantity;
            $product->image = $imagePath ?? null;
            $product->Is_deleted = 0;
            $product->save();

            return response()->json(['message' => 'Product updated successfully']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function destroy($id)
    {
        $product = Products::find($id);
        if ($product) {
            $product->update(['Is_deleted' => 1]);
            return response()->json(['message' => 'Product deleted']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
