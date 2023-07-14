<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    function company(){
        return $this->belongsToMany(Company::class);
    }
    function tasks(){
        return $this->hasMany(Task::class);
    }
    use HasFactory;
}
