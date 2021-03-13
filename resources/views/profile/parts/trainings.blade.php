<div class="item-collapse mt-3">
	<a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapseTrainings" role="button" aria-expanded="false" aria-controls="collapseTrainings">
        <h2 class="text-uppercase">3. @lang('main.trainings')</h2>
        <img src="{{asset('frontend/images/breadcrumb.svg')}}" alt="">
    </a>
    @if(!is_null($trainingHistories) && count($trainingHistories) > 0)
    	<div class="collapse" id="collapseTrainings" style="padding-left: 4.2rem;">
    		<div class="collapse-pad"></div>
    			@foreach($trainingHistories as $history)
    				<?php $training = $history->training ?>
    				<div class="col-12 first-collapse-block">
                        <p class="collapse-item-title" onclick="player{{$training->id}}.api('toggle')" tabindex="0">{{$training->getTitle()}}</p>
                        <h3 class="collapse-item-category">{{$training->getGenreTitle()}}</h3>
                    </div>
                    @if($training->checkFileExtension())
                    	<div class="col-12 col-xs-12 col-sm-10 col-md-6 col-xl-4 player-div collapse-player">
                    		<div class="row position-relative">
                    			<button onclick="player{{$training->id}}.api('toggle');" id="playbut_player{{$training->id}}" class="player_play_button play-icon"></button>
                    			<div id="player{{$training->id}}" class="playerjs" title="123"></div>
                    			<script>
                                    var player{{$training->id}} = new Playerjs({start:{{$history->getTime()}},id: "player{{$training->id}}", file: "{{$training->getFileLink()}}"});
                                    @auth
                                        setInterval(function(){
                                            let time = player{{$training->id}}.api('time');
                                            if(time !== 0 && time > 1)
                                            {   
                                                let type = 'training';
                                                saveHistory(time,type,{{$training->id}},"{{route('profile.saveHistory')}}");
                                            }
                                        },60000);
                                    @endauth
                                </script>
                                <script>
                                    $('#playbut_player{{$training->id}}').focus(function() {
                                        let keys = {};
                                        $(document).keydown(function(e) {
                                            keys[e.which] = true;

                                            if (keys[39]) {
                                                player{{$training->id}}.api('seek', '+10')
                                            }
                                            if (keys[37]) {
                                                player{{$training->id}}.api('seek', '-10')
                                            }
                                        });

                                        $(document).keyup(function(e) {
                                            delete keys[e.which];
                                        });
                                    });
                                </script>
                    		</div>
                    	</div>
                    	@foreach($trainingVideoHistories as $video)
	    					@if($video->historyable_id === $training->video->id)
	    						@if(!is_null($training->getVideoLink()) && strlen($training->getVideoLink()) > 0)
	    							<div class="col-12 mt-4 p-0 player-div collapse-player">
				                        <h3>@lang('main.videoFormat')</h3>
				                        <div class="block-player">
				                            <div class="col-12 inner-player">
				                                <div class="row">
				                                    <video id="my-video{{$video->historyable_id}}" class="video-js" controls preload="auto" width="640" height="264" poster="" data-setup="{}">
				                                        <source src="{{$training->getVideoLink()}}#t={{$video->getTime()}}" type="video/mp4" />
				                                        <!--<source src="nevergonnagiveyouup.mp4" type="video/webm" />-->
				                                        <p class="vjs-no-js">
				                                            Ваш браузер не поддерживает видео
				                                        </p>
				                                    </video>
				                                    <script>
				                                        @auth
				                                            let videoPlayer{{$video->historyable_id}} = document.getElementById('my-video{{$video->historyable_id}}');
				                                            setInterval(function(){
				                                                let time = videoPlayer{{$video->historyable_id}}.currentTime;
				                                                if(time !== 0 && time > 1)
				                                                {   
				                                                    let type = 'video';
				                                                    saveHistory(time,type,{{$video->historyable_id}},"{{route('profile.saveHistory')}}");
				                                                }
				                                            },60000);
				                                        @endauth
				                                    </script>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
	    						@endif
	    					@endif
	    				@endforeach 
                    @else
                    	<div class="col-12">
                            <h3 class="small-text bold">@lang('errors.incorrectFileFormat')</h3>
                        </div>
                    @endif
    			@endforeach
    		<div class="collapse-pad"></div>
    	</div>
    @else
	    <div class="collapse" id="collapseTrainings" style="padding-left: 4.2rem;">
            <div class="collapse-pad"></div>
            <div class="collapse-block position-relative">
                <div class="col-12 first-collapse-block">
                    <h3 tabindex="0" aria-label="@lang('messages.noneTrainings')">@lang('messages.noneTrainings')</h3>
                </div>
            </div>
        </div>
    @endif
</div>