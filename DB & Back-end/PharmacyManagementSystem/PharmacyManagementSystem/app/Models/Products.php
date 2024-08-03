<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Products extends Model
{
    protected $table = 'products'; // Table name

    protected $primaryKey = 'Product_ID'; // Primary key

    public $incrementing = true; // Primary key is auto-incrementing

    protected $fillable = [
        'Pharmacy_ID', 'Product_Name', 'Description', 'Price', 'Expiry_Date',
        'Category_Id', 'Quantity','image', 'Is_deleted',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public $timestamps = false;

    // Define relationships if needed
}
