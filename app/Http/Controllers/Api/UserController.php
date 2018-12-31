<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use Validator;
use Illuminate\Support\Facades\Auth;
use DB;
class UserController extends Controller
{
    public function login(Request $request)
    {
           
        $rules = [
            'email' => 'required|email|max:255',
            'password' => 'required|min:6'
        ];
        $messages = [   
            'email.required' =>  'Email Id is required',
            'email.email'        =>  'Email Id is not in proper format',
            'email.max'        =>  'Email Id should be at most 255 characters long',
            'password.required' =>  'Password is required',
            'password.min' => 'Password should be at least 6 characters long'

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        // return (string)$validator->fails();
        if ($validator->fails()) {
            $response = ['type'=>'error'];
            $response['status'] = 422;
            $response['description'] = "Field validation error";
            $response['error'] =  $validator->errors();
            return response()->json(['error' => $response], 422);
        }

        $credentials = [
            'email' => request('email'),
            'password' => request('password')
        ];
        if (Auth::attempt($credentials)) {
            $success['status'] = 200;
            // $success['token'] = Auth::user()->createToken('MyApp')->accessToken;
            $success['data'] = ['user' => Auth::user(), 'token' => Auth::user()->createToken('MyApp')->accessToken];
            $success['type'] = "success";
            $success['description'] = "Login successful";
            return response()->json(['success' => $success], 200);
        }

        // return response()->json(['error' => 'Unauthorised'], 401);
        $response = ['type'=>'error'];
        $response['status'] = 401;
        $response['description'] = "Wrong credentials";
        $response['error'] = ['msg' => ['Please provide correct credentials']];
        return response()->json(['error' => $response], 401);
    }

    public function register(Request $request)
    {

        $rules = [
            'name' => 'required',
            'email' => 'required|email|max:255|unique:users',
            'region' => 'required|integer|min:1',
            'password' => 'required|confirmed|min:6'
        ];
        $messages = [   
            'name.required' =>  'name is compulsory',
            'email.required' =>  'Email Id is compulsory',
            'email.unique' =>  'Email Id is already taken',
            'email.email'        =>  'Email Id is not in proper format',
            'email.max'        =>  'Email Id should be at most 255 characters long',
            'region.required' => 'Region is required',
            'region.integer' => 'Only integer value allowed in region field',
            'region.min' => 'Region allows 1 as the minimum value',
            'password.required' =>  'Password is compulsory',
            'password.min' => 'Password should be at least 6 characters long',
            'password.confirmed' => 'Retyped password did not match'

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            $response = ['type'=>'error'];
            $response['status'] = 422;
            $response['description'] = "Field validation error";
            $response['error'] =  $validator->errors();
            return response()->json(['error' => $response], 422);
        }

        $result = DB::transaction(function($request) use ($request){
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $input['role'] = 'admin';
            $user = User::create($input);
            return $user;
            // $newLogin = new Login;
            // $newLogin -> user_id =  $newUser->id;
            // $newLogin -> email =  $data['email'];
            // $newLogin -> password =  bcrypt($data['password']);
            // $newLogin -> role =  1;
            // $newLogin -> active =  0;
            // $newLogin ->save();
        });//end of transaction
        $success['status'] = 200;
        $success['type'] = "success";
        $userdata = ['name'=>$request['name'], 'email' => $request['email'], 'role' => $result->role, 'region' =>  $request['region']]; //change admin role afterwards
        // $success['token'] = $result->createToken('MyApp')->accessToken;
        $success['data'] = ['user' => $userdata, 'token' => $result->createToken('MyApp')->accessToken];
        $success['description'] = "Registration successful";

        return response()->json(['success' => $success], 200);
    }

    public function getDetails()
    {
        return response()->json(['success' => Auth::user()]);
    }
}
