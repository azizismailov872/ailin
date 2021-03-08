@extends('main')

@section('title','Аудикнига')

@section('content')
<main role="main" class="container-fluid main-container home-main-div mb-5">
    <div class="container-fluid">
        <div class="row">
            <div class="row title-page-block mb-2">
                <div class="col-12">
                    <h1 class="display-2 title-page">{{$model->title}}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        	<li class="breadcrumb-item text-uppercase"><a href="#">Аудиокниги</a></li>
                            <li class="breadcrumb-item text-uppercase"><a href="#">Фантастика</a></li>
                            <li class="breadcrumb-item text-uppercase active" aria-current="page">Название</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container-fluid book-page">
                <div class="row">
                    <div class="col-12 modal-cat-block p-0">
                        <h3>Описание</h3>
						<div id="summary" class="w-100">
                            <p class="collapse description-play" id="collapseSummary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor maximus laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Suspendisse venenatis sollicitudin erat in gravida. Sed eget nisl tristique, commodo lectus sit amet, vulputate sem. Cras porttitor lorem ipsum, sit amet iaculis massa feugiat vitae. Curabitur sapien odio, ullamcorper tincidunt interdum vitae, vestibulum eu neque. Nam leo massa, fringilla eget mauris feugiat, auctor suscipit justo.
                            </p>
                            <a class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
                        </div>
                    </div>
                    <div class="col-6 p-0">
                    	<button class="play-btn play-description" aria-label="Прослушать описание">
							<i class="fa fa-play play-icn" aria-hidden="true"></i>
						</button>
                    </div>
                    <div class="col-12 modal-cat-block">
                        <h3>Аудиокниги</h3>
                        <div class="block-player">
							<div class="col-6 inner-player">
								<div class="row position-relative">
									<button onclick="player1.api('toggle'); " id="playbut_player1"  class="player_play_button play-icon"></button>
									<div id="player1" class="playerjs" title="123"></div>
									<script>
										 var player1 = new Playerjs({id:"player1", file:"{{$model->getFileLink(app()->getLocale())}}"});
									</script>
								</div>
							</div>
						</div>
                    </div>
                    {{-- <div class="col-12 modal-cat-block">
                        <h3>Видео</h3>
                        <div class="block-player">
                            <div class="col-12 inner-player">
                                <div class="row">
                                    <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" poster="" data-setup="{}">
                                        <source src="nevergonnagiveyouup.mp4" type="video/mp4" />
                                        <!--<source src="nevergonnagiveyouup.mp4" type="video/webm" />-->
                                        <p class="vjs-no-js">
                                            Ваш браузер не поддерживает видео
                                        </p>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>
</main>
<script type="text/javascript">

	$('button[id^="playbut_"]').click(function(){
		$(this).toggleClass("play-icon stop-icon");
	});

</script>
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