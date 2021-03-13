<div class="item-collapse">
    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapseAudioBooks" role="button" aria-expanded="false" aria-controls="collapseAudioBooks">
        <h2 class="text-uppercase">1. @lang('main.audiobooks')</h2>
        <img src="{{asset('frontend/images/breadcrumb.svg')}}" alt="">
    </a>
    @if(!is_null($bookHistories) && count($bookHistories) > 0)
        <div class="collapse" id="collapseAudioBooks" style="padding-left: 4.2rem;">
            <div class="collapse-pad"></div>
            @foreach($bookHistories as $history)
                <?php $book = $history->audiobook ?>
                <div class="collapse-block position-relative">
                    <div class="col-12 first-collapse-block">
                        <p class="collapse-item-title" onclick="player{{$book->id}}.api('toggle')" tabindex="0">{{$book->getTitle()}}</p>
                        <h3 class="collapse-item-category">{{$book->getGenreTitle()}}</h3>
                    </div>
                    @if($book->checkExtension())
                        <div class="col-12 col-xs-12 col-sm-10 col-md-6 col-xl-4 player-div collapse-player">
                            <div class="row position-relative">
                                <button onclick="player{{$book->id}}.api('toggle');" id="playbut_player{{$book->id}}" class="player_play_button play-icon"></button>
                                <div id="player{{$book->id}}" class="playerjs" title="123"></div>
                                <script>
                                    var player{{$book->id}} = new Playerjs({start:{{$history->getTime()}},id: "player{{$book->id}}", file: "{{$book->getFileLink()}}"});
                                    @auth
                                        setInterval(function(){
                                            let time = player{{$book->id}}.api('time');
                                            if(time !== 0 && time > 1)
                                            {   
                                                let type = 'audiobook';
                                                saveHistory(time,type,{{$book->id}},"{{route('profile.saveHistory')}}");
                                            }
                                        },60000);
                                    @endauth
                                </script>
                                <script>
                                    $('#playbut_player{{$book->id}}').focus(function() {
                                        let keys = {};
                                        $(document).keydown(function(e) {
                                            keys[e.which] = true;

                                            if (keys[39]) {
                                                player{{$book->id}}.api('seek', '+10')
                                            }
                                            if (keys[37]) {
                                                player{{$book->id}}.api('seek', '-10')
                                            }
                                        });

                                        $(document).keyup(function(e) {
                                            delete keys[e.which];
                                        });
                                    });
                                </script>
                            </div>
                        </div>
                    @else
                        <div class="col-12">
                            <h3 class="small-text bold">@lang('errors.incorrectFileFormat')</h3>
                        </div>
                    @endif
                </div>
            @endforeach
        </div>
    @else
        <div class="collapse" id="collapseAudioBooks" style="padding-left: 4.2rem;">
            <div class="collapse-pad"></div>
            <div class="collapse-block position-relative">
                <div class="col-12 first-collapse-block">
                    <h3 tabindex="0" aria-label="@lang('messages.noneAudiobooks')">@lang('messages.noneAudiobooks')</h3>
                </div>
            </div>
        </div>
    @endif
</div>