<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterApplication extends Model
{
    use HasFactory;

    protected $table = 'register_applications';

    protected $guarded = [];
}
