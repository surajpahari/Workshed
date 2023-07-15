<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    public function type(){
        return $this->belongsTo(Type::class);
    }
    public function location(){
        return $this->belongsTo(Location::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)
                ->withPivot('company_id', 'status', 'email_status')
                ->withTimestamps();
    }


}
