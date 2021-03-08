<?php $locale = app()->getLocale(); ?>
<div class="col genre-block text-center">
	<a href="{{route('audiobook',$model->slug)}}" class="genre-href">
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