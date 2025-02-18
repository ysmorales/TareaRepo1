<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::paginate(10); // Cambia 10 por el número de elementos por página que desees
        return response()->json([
            'data' => $users->items(),
            'meta' => [
                'current_page' => $users->currentPage(),
                'last_page' => $users->lastPage(),
                'per_page' => $users->perPage(),
                'total' => $users->total(),
            ],
        ]);
    }

    public function store(UserRequest $request): array
    {
        try {
            $user = User::create($request->validated());
            return ResponseHelper::returnResponse(201, "The user was created successfully.", $user);
        } catch (ValidationException $e) {
            return ResponseHelper::returnResponse(422, "Validation error.", $e->errors());
        }
    }

    public function show($id): JsonResponse
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function update(UpdateUserRequest $request, $id): array
    {
        $user = User::findOrFail($id);
        $user->update($request->validated());
        return ResponseHelper::returnResponse(200, 'Actualización exitosa.');
    }

    public function destroy(Request $request): array
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:users,id',
        ]);

        User::destroy($request->ids);

        return ResponseHelper::returnResponse(204, 'Eliminación exitosa.');
    }
}
