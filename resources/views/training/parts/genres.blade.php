<?php $locale = app()->getLocale() ?>
@if($locale === 'ru')
<div class="col genre-block text-center">
	<a href="{{route('trainings.list',$genre->slug)}}" class="genre-href">
		<h4 class="genre-title">{{$genre->title}}</h4>
		@if($genre->trainings->count() === 0)
			<h5 class="genre-qty">0 ТРЕНИНГОВ</h5>
		@elseif($genre->trainings->count() === 1)
			<h5 class="genre-qty">1 ТРЕНИНГ</h5>
		@elseif($genre->trainings->count() > 1)
			<h5 class="genre-qty">{{$genre->trainings->count()}} ТРЕНИНГОВ</h5>
		@endif
	</a>
</div>
@else
<div class="col genre-block text-center">
	<a href="{{route('trainings.list',$genre->slug)}}" class="genre-href">
		<h4 class="genre-title">{{$genre->trans[$locale.'_title']}}</h4>
		@if($genre->trainings->count() === 0)
			<h5 class="genre-qty">0 @lang('main.trainings')</h5>
		@elseif($genre->trainings->count() === 1)
			<h5 class="genre-qty">1 @lang('main.trainings')</h5>
		@elseif($genre->trainings->count() > 1)
			<h5 class="genre-qty">{{$genre->trainings->count()}} @lang('main.trainings')</h5>
		@endif
	</a>
</div>
@endif