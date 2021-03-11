<?php

namespace App\Models;

use App\Models\History\History;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable; 

    protected $table = 'users';

    protected $guarded = ['remember_token'];

    public function histories()
    {
    	return $this->hasMany(History::class,'user_id','id');
    }
}
