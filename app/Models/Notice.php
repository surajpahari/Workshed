<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;
    protected $table = 'notices';
    protected $fillable = ['from', 'to', 'message', 'date', 'time', 'company', ];
    public  function Company(){
        return $this->belongsTo(Company::class);
    }
    public function User(){
        return $this->belongsTo(User::class);
    }
}
