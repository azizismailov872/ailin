<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Illuminate\Http\Request;

class Admin
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
        if($request->path() === 'admin/login')
        {
            return $next($request);
        }
        if(!Auth::guard('admin')->check())
        {
                return redirect('/admin/login');
        }
        if($request->path() === 'admin')
        {
            return redirect('/admin/users/list');
        }
        return $next($request);
    }
}
