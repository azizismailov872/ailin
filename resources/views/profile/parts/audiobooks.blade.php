<div class="item-collapse">
    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapseAudioBooks" role="button" aria-expanded="false" aria-controls="collapseAudioBooks">
        <h2 class="text-uppercase">1. @lang('main.audiobooks')</h2>
        <img src="{{asset('frontend/images/breadcrumb.svg')}}" alt="">
    </a>
    @foreach($histories as $history)
        @if(!is_null($history->audiobook))
            <div class="collapse" id="collapseAudioBooks" style="padding-left: 4.2rem;">
                <div class="collapse-pad"></div>
                <div class="collapse-block position-relative">
                    <div class="col-12 first-collapse-block">
                        <p class="collapse-item-title" onclick="player.api('toggle','url[seek:10]')" tabindex="0">{{$history->audiobook->getTitle()}}</p>
                        <h3 class="collapse-item-category">{{$history->audiobook->getGenreTitle()}}</h3>
                    </div>
                    @if($history->audiobook->checkExtension())
                    <div class="col-12 col-xs-12 col-sm-10 col-md-6 col-xl-4 player-div collapse-player">
                        <div class="row position-relative">
                            <button onclick="player{{$history->audiobook->id}}.api('toggle');" id="playbut_player{{$history->audiobook->id}}" class="player_play_button play-icon"></button>
                            <div id="player{{$history->audiobook->id}}" class="playerjs" title="123"></div>
                            <script>
                                var player{{$history->audiobook->id}} = new Playerjs({start:{{$history->getTime()}},id: "player{{$history->audiobook->id}}", file: "{{$history->audiobook->getFileLink()}}"});
                            </script>
                            <script>
                                $('#playbut_player{{$history->audiobook->id}}').focus(function() {
                                    let keys = {};
                                    $(document).keydown(function(e) {
                                        keys[e.which] = true;

                                        if (keys[39]) {
                                            player{{$history->audiobook->id}}.api('seek', '+10')
                                        }
                                        if (keys[37]) {
                                            player{{$history->audiobook->id}}.api('seek', '-10')
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
        @endif
    @endforeach
</div>