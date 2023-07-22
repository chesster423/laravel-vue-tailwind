<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class RegisterController extends Controller
{
    public function __invoke(Request $request)
    {        
        // This is to bypass funnel registration
        if(is_null($request['password']) || is_null($request['password_confirmation'])) {
            $request['password'] = 'password';
            $request['password_confirmation'] = 'password';
        }

        $data = $request->validate([
            'name'      => 'max: 100',
            'email'     => 'required|email|unique:users,email',
            'password'  => 'required|min:6|max:255|confirmed',
        ]);

        $user = User::create([
            'name'      => $data['name'] ?? '',
            'email'     => $data['email'],
            'email_verified_at' => Carbon::now()->timestamp,
            'password'  => Hash::make($data['password']),
        ]);

        if ($user) {
            $userRole = config('roles.models.role')::whereName('User')->first();
            $user->attachRole($userRole);

            // Trigger send mail
            $blacklist = ['local', 'development'];
            if(!in_array(config('app.env'), $blacklist)) {
                event(new Registered($user));
            }
            
            $token = $user->createToken('access_token')->plainTextToken;

            return response()->json([
                'token' => $token,
                'type'  => 'Bearer',
                'user'  => $user,
            ]);
        }
    }
}
