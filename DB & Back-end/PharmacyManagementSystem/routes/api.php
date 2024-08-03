<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\PharmacyController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\WishlistController;

use Illuminate\Support\Facades\Route;

// Customer routes
Route::post('/customers', [CustomerController::class, 'register']);
Route::get('/customers/{id}', [CustomerController::class, 'show']);
Route::get('/customers', [CustomerController::class, 'index']);
Route::put('/customers/{id}', [CustomerController::class, 'update']);
Route::delete('/customers/{id}', [CustomerController::class, 'destroy']);

// Pharmacy routes
Route::post('/pharmacy', [PharmacyController::class, 'register']);
Route::get('/pharmacy', [PharmacyController::class, 'show']);
Route::post('/login', [UserController::class, 'login']);

// Test route
Route::get('test', function () {
    return 'Route is working!';
});

Route::apiResource('category', CategoryController::class);
Route::apiResource('products', ProductController::class);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::apiResource('sale', SaleController::class);


Route::get('orders/products/{id}', [OrderController::class, 'getProductDetails']);

Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
Route::put('/orders/{id}', [OrderController::class, 'update']);
Route::get('/orders', [OrderController::class, 'getOrdersByCustomerId']);
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders', [OrderController::class, 'index']);
Route::patch('/orders/{id}/soft-delete', [OrderController::class, 'softDelete']);

Route::post('orders/{productId}/soft-delete/{customerId}', [OrderController::class, 'softDelete']);

Route::apiResource('wishlist', WishlistController::class);
