<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\AudioBook\AudioBook;
use App\Models\History\History;
use App\Models\Podcast\Podcast;
use App\Models\Training\Training;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function history()
    {	
    	$user = Auth::user();

    	$histories = $user->histories;

    	return view('profile.history',compact('user','histories'));
    }

   	public function saveHistory(Request $request)
   	{	
   		$user = Auth::user();

   		$type = AudioBook::class;

   		$time = $request->time ? $request->time : null;

   		if(!is_null($request->type))
   		{
   			if($request->type === 'audiobook')
   			{
   				$type = AudioBook::class;
   			}
   			elseif($request->type === 'podcast')
   			{
   				$type = Podcast::class;
   			}
   			elseif($request->type === 'training')
   			{
   				$type = Training::class;
   			}
   		}

   		if(!is_null($user))
   		{  
            $values = [
                'time' => $time,
                'historyable_id' => $request->historyable_id,
                'historyable_type' => $type
            ];
   			$user->histories()->updateOrCreate([
   				'historyable_id' => $request->historyable_id,
   			],$values);

   			return response()->json('Все ок',200);
   		}

        return response()->json('Ошибка',500);
   	}
}
