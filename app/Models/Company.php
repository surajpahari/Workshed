<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public function user(){
        return $this->hasMany(User::class);
    }
    public function locations(){
        return $this->hasMany(Location::class);
    }
    public function types(){
        return $this->hasMany(Type::class);
    }
    public function tasks(){
        return $this->hasMany(Task::class);
    }

    use HasFactory;
}
