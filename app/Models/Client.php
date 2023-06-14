<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Inertia\Testing\Concerns\Has;

class Client extends Model
{
    public function company():HasOne{
        return $this->hasOne(Company::class);
    }
    use HasFactory;
}
