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
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:5'
        ]);
        $status = 401;
        $response = ['type'=>'error'];
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
        $response['status'] = 401;
        $response['description'] = "Wrong credentials";
        $response['error'] = ['Please provide correct credentials'];
        return response()->json(['error' => $response], 401);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
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
