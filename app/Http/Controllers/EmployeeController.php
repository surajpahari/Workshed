<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\Company;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use App\Http\Requests\EditRequest;
use function PHPUnit\Framework\returnArgument;

class EmployeeController extends Controller
{
    //Index page for the employee
    public function index(){
        return Inertia::render("Employee/Employee");
    }

    //Page to show the create Employee form
    public function showForm(){
        return Inertia::render("Employee/AddEmployee");
    }

    //Handle the request to create new employee
    public function create(Request $request){
        $this->validate($request,[
            'username' => ['required','string','max:20'],
            'name' => ['required','string','max:20'],
            'email' => ['required','email','unique:users'],
            'role_id' => ['required','integer',Rule::in([0,1])],
            'payrate' => ['required','integer','min_digits:3','max_digits:6'],
            'password' => ['required','confirmed','min:6'],
            'phone_no' =>['required','integer','min_digits:10']
        ]);

        $company = Auth::user()->company;

        $employee = new User;
        $employee->name = $request->input('name');
        $employee ->username = $request->input('username');
        $employee ->phone = $request->input('phone_no');
        $employee ->email = $request->input('email');
        $employee ->password = Hash::make($request->input('password'));
        $employee ->role_id= $request->input('role_id');
        $employee ->payrate = $request->input('payrate');
        $company->user()->save($employee);
    }

    public function getList($key){
        $users = User::query()->orderBy('id')->paginate($key);
        return response($users,'200');
    }
    //to response the request for employee-list
    public function showList(){
        $company = Auth::user()->company;
        $users = $company->user;

        /* $company = findOrFail(); */
        return Inertia::render("Employee/ListEmployee",[
            'users'=>$users,
        ]);
    }
    //for search
    public function search($key){
        return User::where('name','like',"$key%")->get();
    }
    public function destroy($key){
        $company = Auth::user()->company;
        $user= User::findOrFail($key);
        if(Auth::user()->company_id == $user->company_id){
            $user->delete();
            return response()->json(['message' => 'Authorized'], Response::HTTP_OK);
        }
        else{
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_FAILED);
        }
        /* return redirect()->route('employee.index')->with(['notification' => 'Success']); */
    }
    public function provideOptions(){
        $id = Auth::user()->company->id;
        $company = Company::findOrFail($id);
        return $company->user()->select('id','name')->where('role_id', '!=', 1)->get();
    }
    public function show(){
        return Inertia::render('Employee/Profile/Profile');
    }
    //for details needed for profile view
    public function getProfile($id = null){
        if($id == null){
            $user = Auth::user();
        }
        else{
            $user = User::findOrFail($id);
        }
        return Inertia::render("Employee/Profile/Profile",$user->only('username','email','phone','created_at'));
    }
    //for updating email and phone

    public  function updateInfo(EditRequest $request){
        return;
    }
}
