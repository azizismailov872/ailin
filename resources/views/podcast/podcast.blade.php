@extends('main')
<?php $locale = app()->getLocale(); ?>
@section('title',$model->getTitle())

@section('content')
<main role="main" class="container-fluid main-container home-main-div mb-5">
    <div class="container-fluid">
        <div class="row">
            <div class="row title-page-block mb-2">
                <div class="col-12">
                    <h1 class="display-4 display-sm-4 title-page">{{$model->getTitle()}}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        	<li class="breadcrumb-item text-uppercase"><a href="{{route('audiobooks.genres')}}">@lang('main.podcasts')</a></li>
                            <li class="breadcrumb-item text-uppercase"><a href="{{route('audiobooks.list',$model->genre->slug)}}">{{$model->getGenreTitle()}}</a></li>
                            <li class="breadcrumb-item text-uppercase active" aria-current="page">{{$model->getTitle()}}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container-fluid book-page">
                <div class="row">
                    <div class="col-12 modal-cat-block p-0">
                        <h3>@lang('main.description')</h3>
						<div id="summary" class="w-100">
                            <p class="collapse description-play" id="collapseSummary">
                                {{$model->getDescription()}}
                            </p>
                            @if($model->getDescription() !== 'Нет описания' && $model->getDescription() !== 'No description' && strlen($model->getDescription()) > 50)
                                <a class="collapsed {{$locale}}" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary">
                                </a>
                            @endif
                        </div>
                    </div>
                    <div class="col-6 p-0 mt-2">
                    	<button class="play-btn play-description" aria-label="Прослушать описание">
							<i class="fa fa-play play-icn" aria-hidden="true"></i>
						</button>
                    </div>
                    <div class="col-12 modal-cat-block">
                        <h3>@lang('main.audiobooks')</h3>
                        @if(!is_null($model->getFileLink()) && strlen($model->getFileLink()) > 2)
                        <div class="block-player">
							<div class="col-6 inner-player">
								<div class="row position-relative">
									<button onclick="player1.api('toggle'); " id="playbut_player1"  class="player_play_button play-icon"></button>
									<div id="player1" class="playerjs" title="123"></div>
									<script>
										 var player1 = new Playerjs({id:"player1", file:"{{$model->getFileLink()}}"});
										  @auth
                                            setInterval(function(){
                                                let time = player1.api('time');
                                                if(time !== 0)
                                                {   
                                                    let type = 'podcast';
                                                    saveHistory(time,type,{{$model->id}},"{{route('profile.saveHistory')}}");
                                                }
                                            },180000);
                                        @endauth
									</script>
								</div>
							</div>
						</div>
                        @else
                        <p class="h4 text-uppercase" tabindex="0">@lang('main.fileMissing')</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<script>

	 $('#playbut_player1').focus(function() {

		$('#oframeplayer1')[0].focus();
		var keys = {};

		$(document).keydown(function(e) {
			keys[e.which] = true;

			if (keys[39]) {
				player1.api('seek','+10')
			}
			if (keys[37]) {
				player1.api('seek','-10')
			}
		});

		$(document).keyup(function(e) {
			delete keys[e.which];
		});
	 });

	 $('#playbut_player2').focus(function() {
	 var keys = {};

	 $(document).keydown(function(e) {
		 keys[e.which] = true;

		 if (keys[39]) {
			 player2.api('seek','+10')
		 }
		 if (keys[37]) {
			 player2.api('seek','-10')
		 }
	 });

	 $(document).keyup(function(e) {
		 delete keys[e.which];
	 });
	});

</script>
@endsection