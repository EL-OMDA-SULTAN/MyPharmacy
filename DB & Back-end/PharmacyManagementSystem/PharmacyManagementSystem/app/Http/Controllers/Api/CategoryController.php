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
        $categories = Categories::all();
        // var_dump($categories);
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
        var_dump($request->all());
        echo "hello";
        $validator = Validator::make($request->all(), [
            'Category_Name' => 'required|string|max:255'
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
        $category->number_of_products=0;
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
            'Category_Name' => 'required|string|max:255',
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
    // \Log::info('Attempting to delete category with id: ' . $id);
    // var_dump($id);
    $category = Categories::find($id);
    // var_dump($category);
    // var_dump($category->Category_ID);

    if (!$category) {
        return response()->json(['message' => 'Category not found'], 404);
    }

        // $category->Is_deleted = 1;
        $category->delete();
        // $category->update(['Is_deleted' => 1]);
        // $category->save();
        // $category->number_of_products='0';
        // try {
        // if () {
        //     \Log::info('Category deleted successfully');
        // } else {
        //     \Log::error('Error deleting category');
        // }

    // } catch (\Exception $e) {
    //     \Log::error('Error deleting category: ' . $e->getMessage());
    //     // return response()->json(['message' => 'Error deleting category'], 500);
    // }

    return response()->json([
        'status' => true,
        'message' => 'Category deleted successfully'
    ], 200);
}
}
