<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request)
    {
           
        $rules = [
            'email' => 'required|email|max:255',
            'password' => 'required|min:6'
        ];
        $messages = [   
            'email.required' =>  'Email Id is compulsory',
            'email.email'        =>  'Email Id is not in proper format',
            'email.max'        =>  'Email Id should be at most 255 characters long',
            'password.required' =>  'Password is compulsory',
            'password.min' => 'Password should be at least 6 characters long'

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        // return (string)$validator->fails();
        if ($validator->fails()) {
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:login',
            'password' => 'required|min:5',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;

        return response()->json(['success' => $success]);
    }

    public function getDetails()
    {
        return response()->json(['success' => Auth::user()]);
    }
}
