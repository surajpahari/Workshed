<?php

namespace App\Http\Controllers;
use Auth;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            "location"=>['required'],
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
    public function destroy(Location $location)
    {
        //
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
