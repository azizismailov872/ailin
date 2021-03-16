<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as AuthFacade;

class Auth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {  
        if($request->path() == 'main' || $request->path() == 'language')
        {
            return $next($request);
        }

        if(!AuthFacade::check())
        {
            return redirect()->route('index');
        }

        return $next($request);
    }
}
