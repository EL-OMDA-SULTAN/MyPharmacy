<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pharmacies extends Model
{
    use HasFactory;

    protected $table = 'pharmacies';

    protected $primaryKey = 'Pharmacy_ID';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Pharmacy_ID',
        'Pharmacy_Name',
        'Address',
        'Phone_Number',
    ];

    public function users()
    {
        return $this->hasMany(User::class, 'Pharmacy_ID');
    }
}
