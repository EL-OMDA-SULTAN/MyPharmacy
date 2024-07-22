<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table = 'Users'; // Table name

    protected $primaryKey = 'User_ID'; // Primary key

    public $incrementing = true; // Primary key is auto-incrementing

    protected $fillable = [
        'User_Password', 'User_Email', 'User_Type', 'Pharmacy_ID'
    ];

    // Define relationships if needed
}
