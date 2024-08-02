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
Route::put('/customers/{id}', [CustomerController::class, 'update']);
Route::delete('/customers/{id}', [CustomerController::class, 'destroy']);

// Pharmacy routes
Route::post('/pharmacy', [PharmacyController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

// Test route
Route::get('test', function () {
    return 'Route is working!';
});

Route::apiResource('category', CategoryController::class);
Route::apiResource('product', ProductController::class);
Route::apiResource('sale', SaleController::class);
Route::apiResource('order', OrderController::class);
Route::apiResource('wishlist', WishlistController::class);
