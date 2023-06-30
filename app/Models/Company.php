<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public function user(){
        return $this->hasMany(User::class);
    }
    public function location(){
        return $this->hasMany(Location::class);
    }
    public function type(){
        return $this->hasMany(Type::class);
    }

    use HasFactory;
}
