<div class="item-collapse mt-3">
    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapsePodcasts" role="button" aria-expanded="false" aria-controls="collapsePodcasts">
        <h2 class="text-uppercase">2. @lang('main.podcasts')</h2>
        <img src="{{asset('frontend/images/breadcrumb.svg')}}" alt="">
    </a>
    @foreach($histories as $history)
        @if(!is_null($history->podcast))
            <div class="collapse" id="collapsePodcasts" style="padding-left: 4.2rem;">
                <div class="collapse-pad"></div>
                <div class="collapse-block position-relative">
                    <div class="col-12 first-collapse-block">
                        <p class="collapse-item-title" onclick="player.api('toggle','url[seek:10]')" tabindex="0">{{$history->podcast->getTitle()}}</p>
                        <h3 class="collapse-item-category">{{$history->podcast->getGenreTitle()}}</h3>
                    </div>
                    @if($history->podcast->checkExtension())
                    <div class="col-12 col-xs-12 col-sm-10 col-md-6 col-xl-4 player-div collapse-player">
                        <div class="row position-relative">
                            <button onclick="player{{$history->podcast->id}}.api('toggle');" id="playbut_player{{$history->podcast->id}}" class="player_play_button play-icon"></button>
                            <div id="player{{$history->podcast->id}}" class="playerjs" title="123"></div>
                            <script>
                                var player{{$history->podcast->id}} = new Playerjs({start:{{$history->getTime()}},id: "player{{$history->podcast->id}}", file: "{{$history->podcast->getFileLink()}}"});
                                @auth
                                    setInterval(function(){
                                        let time = player{{$history->podcast->id}}.api('time');
                                        if(time !== 0)
                                        {   
                                            let type = 'podcast';
                                            saveHistory(time,type,{{$history->podcast->id}},"{{route('profile.saveHistory')}}");
                                        }
                                    },180000);
                                @endauth
                            </script>
                            <script>
                                $('#playbut_player{{$history->podcast->id}}').focus(function() {
                                    let keys = {};
                                    $(document).keydown(function(e) {
                                        keys[e.which] = true;

                                        if (keys[39]) {
                                            player{{$history->podcast->id}}.api('seek', '+10')
                                        }
                                        if (keys[37]) {
                                            player{{$history->podcast->id}}.api('seek', '-10')
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
                <div class="collapse-pad"></div>
            </div>
        @else
            <div class="collapse" id="collapsePodcasts" style="padding-left: 4.2rem;">
                <div class="collapse-pad"></div>
                <div class="collapse-block position-relative">
                    <div class="col-12 first-collapse-block">
                        <h3 tabindex="0" aria-label="@lang('messages.nonePodcasts')">@lang('messages.nonePodcasts')</h3>
                    </div>
                </div>
            </div>
        @endif
    @endforeach
</div>