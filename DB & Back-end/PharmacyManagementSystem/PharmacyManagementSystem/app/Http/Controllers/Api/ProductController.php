<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

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
        $request->validate([
            'Pharmacy_ID' => 'required|integer',
            'Product_Name' => 'required|string',
            'Description' => 'nullable|string',
            'Price' => 'required|numeric',
            'Expiry_Date' => 'nullable|date',
        ]);

        $product = Products::create($request->all());   
        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $product = Products::find($id);
        if ($product) {
            $product->update($request->all());
            return response()->json($product);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function destroy($id)
    {
        $product = Products::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['message' => 'Product deleted']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}

