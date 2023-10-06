<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    function company(){
        return $this->belongsTo(Company::class);
    }
    function task(){
        return $this->belongsTo(Task::class);
    }
}
