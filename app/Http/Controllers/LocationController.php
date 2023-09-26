<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Response;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;
use App\Models\Company;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use App\Http\Requests\EditRequest;
use function PHPUnit\Framework\returnArgument;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Location/Location');
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            "name"=>['required','string'],
            "address"=>['required'],
            "contact"=>['required','integer','min_digits:10']
        ];
        $this->validate($request, $rules);
        $company=Auth::user()->company;
        $location = new Location;
        $location ->name = $request->input('name');
        $location ->address = $request->input('address');
        $location->lat = $request->input('lat');
        $location ->long = $request->input('lng');
        $location ->contact = $request->input('contact');
        $location ->person = $request->input('person');
        $location ->status = 1;
        $company->locations()->save($location);
        return $this->index();
    }

    /**
     * Display the specified resource.
     */
    public function show(Location $location)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Location $location)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */




public function destroy($id)
{
    $company = Auth::user()->company->id;
    $location = Location::findOrFail($id);

    if ($location->company_id == $company) {
        // Retrieve and delete associated tasks without triggering foreign key constraints
        $location->tasks()->each(function ($task) {
            // Detach users associated with the task if needed
            $task->users()->detach();

            // Delete the task itself without triggering foreign key constraints
            $task->delete();
        });

        // Delete the location
        $location->delete();

        return response()->json(['message' => 'Authorized'], Response::HTTP_OK);
    } else {
        return response()->json(['message' => 'Unauthorized'], Response::HTTP_FORBIDDEN);
    }
}

    public function getList($key){
        $location = Location::query()->orderBy('id')->paginate($key);
        return response($location,'200');
    }
    public function search($key){
        return Location::where('name','like',"$key%")->get();
    }
    public function provideOptions(){
        return Location::select('id','name')->get();
    }
}
