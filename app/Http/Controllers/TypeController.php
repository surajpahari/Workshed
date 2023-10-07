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
        $rules =[
            'type'=>['required','min:4']
        ];
        $this->validate($request, $rules);
        $company=Auth::user()->company;
        $type= new Type;
         $type->type= $request->input('type');
        $company->types()->save($type);
        return;

  }
  public function search($key){
      return Type::where('type','like',"$key%")->get();
  }
  public function getList($key){
        $type= Type::where('company_id',Auth::user()->company_id)->orderBy('id','desc')->paginate($key);
        return response($type,'200');
  }
  public function provideOptions(){
    return Type::select('id', 'type')->get();
  }
public function destroy($id)
{
    $company = Auth::user()->company->id;
    $type = Type::findOrFail($id);

    if ($type->company_id == $company) {
        // Retrieve and delete associated tasks without triggering foreign key constraints
        $type->tasks()->each(function ($task) {
            // Detach users associated with the task if needed
            $task->users()->detach();

            // Delete the task itself without triggering foreign key constraints
            $task->delete();
        });

        $type->delete();

        return response()->json(['message' => 'Authorized'], Response::HTTP_OK);
        // Delete the location

    } else {
        return response()->json(['message' => 'Unauthorized'], Response::HTTP_FORBIDDEN);
    }
}
}
