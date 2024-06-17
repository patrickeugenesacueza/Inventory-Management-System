<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceModel extends Model
{
    use HasFactory;

    protected $table = 'device';
    protected $fillable = [
        'category',
        'product',
        'sn',
        'price',
        'personnel'
    ];
}
