<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table = 'Products'; // Table name

    protected $primaryKey = 'Product_ID'; // Primary key

    public $incrementing = true; // Primary key is auto-incrementing

    protected $fillable = [
        'Pharmacy_ID', 'Product_Name', 'Description', 'Price', 'Expiry_Date'
    ];

    // Define relationships if needed
}
