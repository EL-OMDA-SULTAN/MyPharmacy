<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $primaryKey = 'Category_Id';

    protected $fillable = [
        'Category_Name',
        'Is_deleted',
        'number_of_products'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public $timestamps = false;

    public function product()
    {
        return $this->hasMany(Product::class);
    }

    public function category()
    {
        return $this->hasMany(Category::class);
    }

    public function users()
    {
        return $this->hasMany(User::class, 'Category_ID');
    }

    public function scopeActive($query)
    {
        return $query->where('Is_deleted', 0);
    }

    public function scopeInactive($query)
    {
        return $query->where('Is_deleted', 1);
    }

}
