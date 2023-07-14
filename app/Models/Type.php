<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;
    public  function Company(){
        return $this->belongsTo(Company::class);
    }
    public function tasks(){
        return $this->hasMany(Task::class);
    }
}
