<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    // If Order_ID is the primary key
    protected $primaryKey = 'Order_ID';

    // If you don't want Laravel to increment the primary key automatically
    public $incrementing = false;

    // Define the data type of the primary key
    protected $keyType = 'string'; // Change this to 'int' if the primary key is an integer


    protected $fillable = [
        'Customer_ID',
        'Product_ID',
        'Order_Status',
        'Is_deleted'
    ];
}