<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get all categories
        $categories = Categories::where('Is_deleted', 0)->get();
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Category_Name' => 'required|string|max:255|unique:categories,Category_Name'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $category = new Categories();
        $category->Category_Name = $request->Category_Name;
        $category->Is_deleted = 0;
        $category->number_of_products = 0;
        $category->save();

        return response()->json(['message' => 'Category created successfully!'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Categories::find($id);
        if ($category) {
            return response()->json($category);
        } else {
            return response()->json(['message' => 'Category not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Category_Name' => 'required|string|max:255|unique:categories,Category_Name,' . $id . ',Category_ID'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $category = Categories::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->update([
            'Category_Name' => $request->Category_Name,
            'Is_deleted' => $request->Is_deleted,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Category updated successfully',
            'category' => $category
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Categories::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        // Update the Is_deleted column to 1
        $category->update(['Is_deleted' => 1]);

        return response()->json([
            'status' => true,
            'message' => 'Category deleted successfully'
        ], 200);
    }
}
