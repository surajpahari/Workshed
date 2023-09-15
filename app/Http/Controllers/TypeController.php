<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;

use Inertia\Inertia;
use Auth;
class TypeController extends Controller
{

  //
  public function index(){
      return Inertia::render("Jobs/Type/Type");
  }
  public function store(Request $request){

        $company=Auth::user()->company;
        $type= new Type;
         $type->type= $request->input('type');
        $company->types()->save($type);
        return $type;


         return $this->index();



  }
  public function search($key){
      return Type::where('type','like',"$key%")->get();
  }
  public function getList($key){
        $type= Type::query()->orderBy('id')->paginate($key);
        return response($type,'200');
  }
  public function provideOptions(){
    return Type::select('id', 'type')->get();
  }
}
