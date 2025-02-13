<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(): array
    {
        $users = User::all()->toArray();
        return ResponseHelper::returnResponse(200, 'User list.',response()->json($users));
    }

    public function store(UserRequest $request): JsonResponse
    {
        $user = User::create($request->validated());
        return response()->json($user, 201);
    }

    public function show($id): JsonResponse
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function update(UserRequest $request, $id): JsonResponse
    {
        $user = User::findOrFail($id);
        $user->update($request->validated());
        return response()->json($user);
    }

    public function destroy($id): array
    {
        $user = User::findOrFail($id);
        $user->delete();
        return ResponseHelper::returnResponse(204, 'Eliminación exitosa.');
    }
}
