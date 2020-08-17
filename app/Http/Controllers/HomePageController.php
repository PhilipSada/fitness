<?php

namespace App\Http\Controllers;

use App\Member;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HomePageController extends Controller
{
    public function show(){
        return view('index');
    }

    public function showClasses(){
        $classes = Service::all();

        return response()->json([
            'classes'=>$classes
        ]);
    }
    public function becomeMember(Request $request){
       
        $validator = Validator::make($request->json()->all(), [
            'firstName' => ['max:255', 'min:4'],
            'lastName' => ['max:255', 'min:4'],
            'email' => ['email', 'max:255',],
            'membershipPlan'=>['required'],
            'gymLocation'=>['required']
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }
        $member = new Member();
        $member->first_name = $request->json()->get('firstName');
        $member->last_name = $request->json()->get('lastName');
        $member->email = $request->json()->get('email');
        $member->membership_plan = $request->json()->get('membershipPlan');
        $member->gym_location = $request->json()->get('gymLocation');
       
        $member->save();

        return response()->json(['success'=>'submitted successfully']);
    }
}
