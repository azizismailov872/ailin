<div class="col genre-block text-center">
	<a href="#" class="genre-href" data-toggle="modal" data-target="#exampleModal">
		<h4 class="genre-title">{{$model->title}}</h4>
		@if(!empty($model->author))
			<h5 class="genre-qty">{{$model->author}}</h5>
		@endif
	</a>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  	<div class="modal-dialog modal-xl" role="document">
    	<div class="modal-content forum">
    		<div class="modal-header-forum">
    		    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    		        <span aria-hidden="true">&times</span>
    		    </button>
    		</div>
    		<div class="modal-body modal-category">
				<h2>{{$model->title}}</h2>
				<div class="row">
					<div class="col-12 modal-cat-block">
					@if(!is_null($model->description) && strlen($model->description) > 0)
						<h3>Описание</h3>
						<div class="row">
							<div class="col-12">
								<div id="summary"  class="description-play col-12 col-xs-12 col-sm-12 col-md-8 col-lg-6">
								    <p class="collapse" id="collapseSummary">
						          		{{$model->description}}
								    </p>
								    <a class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-6 p-0">
								<button class="play-btn play-description" aria-label="Прослушать описание">
									<i class="fa fa-play play-icn" aria-hidden="true"></i>
								</button>
							</div>
						</div>
					@else
						<h3>Описание</h3>
						<div class="row">
							<div class="col-12">
								<div id="summary" class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-6">
								    <p class="collapse" tabindex="0" id="collapseSummary">
						          		Нет описания
								    </p>
								</div>
							</div>
						</div>
						@endif
					</div>
					<div class="col-12 modal-cat-block">
						<h3>Аудиокнига</h3>
						<div class="row">
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
					</div>
				</div>
			</div>
    	</div>
  	</div>
</div>
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