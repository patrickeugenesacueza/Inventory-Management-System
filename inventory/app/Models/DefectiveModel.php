<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DefectiveModel extends Model
{
    use HasFactory;

    protected $table = 'defective';

    protected $fillable = [
        'category',
        'product',
        'sn',
        'price',
        'personnel',
        'created_at',
        'updated_at',
    ];
}
