<?php $locale = app()->getLocale(); ?>
<div class="col genre-block text-center">
	<a href="#" class="genre-href" data-toggle="modal" data-target="#{{$model->slug}}">
		@if($locale === 'ru')
			<h4 class="genre-title">{{$model->title}}</h4>
			@if(!empty($model->author))
				<h5 class="genre-qty">{{$model->author}}</h5>
			@endif
		@else
			<h4 class="genre-title">{{$model->trans[$locale.'_title']}}</h4>
			@if(!empty($model->author))
				<h5 class="genre-qty">{{$model->author}}</h5>
			@endif
		@endif
	</a>
</div>
<div class="modal fade" id="{{$model->slug}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  	<div class="modal-dialog modal-xl" role="document">
    	<div class="modal-content forum">
    		<div class="modal-header-forum">
    		    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    		        <span aria-hidden="true">&times</span>
    		    </button>
    		</div>
    		<div class="modal-body modal-category">
				@if($locale === 'ru')
					<h2>{{$model->title}}</h2>
				@else
					<h2>{{$model->trans[$locale.'_title']}}</h2>
				@endif
				<div class="row">
					@if($locale === 'ru')
						<div class="col-12 modal-cat-block">
							@if(!is_null($model->description) && strlen($model->description) > 0)
								<h3>@lang('main.description')</h3>
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
								<h3>@lang('main.description')</h3>
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
					@else
						<div class="col-12 modal-cat-block">
							@if(!is_null($model->trans[$locale.'_description']) && strlen($model->trans[$locale.'_description']) > 0)
								<h3>@lang('main.description')</h3>
								<div class="row">
									<div class="col-12">
										<div id="summary"  class="description-play col-12 col-xs-12 col-sm-12 col-md-8 col-lg-6">
										    <p class="collapse" id="collapseSummary">
								          		{{$model->trans[$locale.'_description']}}
										    </p>
										    <a class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-6 p-0">
										<button class="play-btn play-description" aria-label="@lang('main.listenDesc')">
											<i class="fa fa-play play-icn" aria-hidden="true"></i>
										</button>
									</div>
								</div>
							@else
								<h3>@lang('main.description')</h3>
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
					@endif
					<div class="col-12 modal-cat-block">
						<h3>@lang('main.audiobook')</h3>
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