<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'User_Email',
        'User_Password',
        'User_Type',
        'Pharmacy_ID',
    ];

    protected $hidden = [
        'User_Password',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function pharmacy()
    {
        return $this->belongsTo(Pharmacies::class, 'Pharmacy_ID');
    }
}
