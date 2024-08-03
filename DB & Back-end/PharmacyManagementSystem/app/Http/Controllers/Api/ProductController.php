<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
//storage
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Products::where('Is_deleted', 0)->get();
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
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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
            $imagePath = $image->store('images', 'public');
            $imageUrl = asset('storage/' . $imagePath);
        }

        $product = new Products();
        $product->Pharmacy_ID = $request->Pharmacy_ID;
        $product->Product_Name = $request->Product_Name;
        $product->Description = $request->Description;
        $product->Price = $request->Price;
        $product->Expiry_Date = $request->Expiry_Date;
        $product->Category_Id = $request->Category_Id;
        $product->Quantity = $request->Quantity;
        $product->image = $imagePath;
        $product->Is_deleted = 0;
        $product->save();

        $category = Categories::find($request->Category_Id);
        $category->number_of_products = $category->number_of_products + 1;
        $category->save();

        return response()->json(['message' => 'Product created successfully!', 'image' => $imageUrl], 201);
    }

    public function update(Request $request, $id)
    {
        //pars the id to int
        $id = intval($id);
        $product = Products::find($id);
        $validator = Validator::make($request->all(), [
            'Product_Name' => 'required|string|unique:products,Product_Name,' . $id . ',Product_ID',
            'Pharmacy_ID' => 'required|integer',
            'Description' => 'required|string',
            'Price' => 'required|numeric',
            'Expiry_Date' => 'required|date',
            'Category_Id' => 'required|integer',
            'Quantity' => 'required|integer',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        // $product = Products::find($id);
            if ($request->hasFile('image')) {
            // Delete old image
                if ($product->image) {
                    Storage::delete($product->image);
                }
                $image = $request->file('image');
                $imagePath = $image->store('images', 'public');
                $imageUrl = asset('storage/' . $imagePath);
            }

            $product->update([
                'Pharmacy_ID' => $request->input('Pharmacy_ID'),
                'Product_Name' => $request->input('Product_Name'),
                'Description' => $request->input('Description'),
                'Price' => $request->input('Price'),
                'Expiry_Date' => $request->input('Expiry_Date'),
                'Category_Id' => $request->input('Category_Id'),
                'Quantity' => $request->input('Quantity'),
                'image' => $imagePath,
                'Is_deleted' => 0
            ]);

            // $product->Pharmacy_ID = $request->input('Pharmacy_ID');
            // $product->Product_Name = $request->input('Product_Name');
            // $product->Description = $request->input('Description');
            // $product->Price = $request->input('Price');
            // $product->Expiry_Date = $request->input('Expiry_Date');
            // $product->Category_Id = $request->input('Category_Id');
            // $product->Quantity = $request->input('Quantity');
            // $product->image = $imagePath;
            // $product->Is_deleted = 0;
            // $product->save();
            // $product->Product_Name = $request->Product_Name;
            // $product->Description = $request->Description;
            // $product->Price = $request->Price;
            // $product->Expiry_Date = $request->Expiry_Date;
            // $product->Category_Id = $request->Category_Id;
            // $product->Quantity = $request->Quantity;
            // $product->image = $imagePath;
            // $product->Is_deleted = 0;
            // $product->save();
        if ($product) {
            return response()->json(['message' => 'Product updated successfully']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function destroy($id)
    {
        $product = Products::find($id);
        $category = Categories::find($product->Category_Id);
        $category->number_of_products = $category->number_of_products - 1;
        $category->save();
        if ($product) {
            $product->update(['Is_deleted' => 1]);
            return response()->json(['message' => 'Product deleted']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }


    }
}
