<?php

namespace App\Models; // Make sure this matches your file structure

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str; 

class Customers extends Model
{
    use HasFactory;

    // The table associated with the model.
    protected $table = 'customers';

    // The attributes that are mass assignable.
    protected $fillable = [
        'Customer_Name',
        'Customer_Email',
        'Customer_Password',
        'Is_deleted',
    ];

    // The attributes that should be hidden for arrays.
    protected $hidden = [
        'Customer_Password',
    ];

    // The attributes that should be cast to native types.
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Automatically generate UUID for Customer_ID
    public static function boot()
    {
        parent::boot();
        
        static::creating(function ($customer) {
            $customer->Customer_ID = (string) Str::uuid(); // Ensure Str::uuid() is correctly called
        });
    }
}
