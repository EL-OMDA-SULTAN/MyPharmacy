<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\Products;

class OrderController extends Controller
{
    // Fetch orders by Customer_ID and exclude deleted orders
    public function getOrdersByCustomerId(Request $request)
    {
        $customerId = $request->input('Customer_ID');

        // Fetch orders with Is_deleted = 0
        $orders = Orders::where('Customer_ID', $customerId)
                        ->where('Is_deleted', 0)
                        ->get();

        return response()->json($orders);
    }

    // Store a new order
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Customer_ID' => 'required|string|max:255',
            'Product_ID' => 'required|integer', // Ensure Product_ID is an integer
            'Order_Status' => 'required|string|max:255',
            'Is_deleted' => 'required|integer',
        ]);

        // Create a new order
        $order = Orders::create($validatedData);

        return response()->json($order, 201);
    }

    // Fetch orders with optional Customer_ID query parameter
    public function index(Request $request)
    {
        $customerId = $request->query('customerId');
        if ($customerId) {
            // Fetch orders with Is_deleted = 0
            $orders = Orders::where('Customer_ID', $customerId)
                            ->where('Is_deleted', 0)
                            ->get();
            return response()->json($orders);
        }

        return response()->json(['error' => 'Customer ID is required'], 400);
    }

    // Soft delete orders by Product_ID and Customer_ID
    public function softDelete($productId, $customerId)
    {
        // Find orders by Customer_ID and Product_ID
        $orders = Orders::where('Product_ID', $productId)
                        ->where('Customer_ID', $customerId)
                        ->where('Is_deleted', 0) // Ensure only non-deleted orders are updated
                        ->get();

        if ($orders->isNotEmpty()) {
            foreach ($orders as $order) {
                $order->Is_deleted = 1;
                $order->save();
            }

            return response()->json(['success' => true, 'message' => 'Orders marked as deleted successfully.']);
        }

        return response()->json(['success' => false, 'message' => 'No orders found.'], 404);
    }

    public function destroy($id)
    {
        $order = Orders::findOrFail($id);
        $order->delete();
        return response()->json(null, 204);
    }

    public function update(Request $request, $id)
    {
        $order = Orders::findOrFail($id);
        $order->update($request->all());
        return response()->json($order);
    }

    public function getProductDetails($id)
    {
        $product = Products::find($id);

        if ($product) {
            return response()->json($product);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
