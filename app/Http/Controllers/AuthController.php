<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Handle user registration.
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully']);
    }

    /**
     * Handle user login and return a token.
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user) {
            return ResponseHelper::returnResponse(404, "The provided email does not exist.");
        }

        if (! Hash::check($request->password, $user->password)) {
            return ResponseHelper::returnResponse(401, 'The provided password is incorrect.');
        }

        $tokenResult = $user->createToken('auth_token');
        $accessToken = $tokenResult->plainTextToken;
        $expiration = $tokenResult->accessToken->expires_at;

        return response()->json([
            'access_token' => $accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $expiration,
            'codigoRetorno' => 200,
            'message' => 'User logged in successfully',
            'user' => $user
        ]);
    }
}
