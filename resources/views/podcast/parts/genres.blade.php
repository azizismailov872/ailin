<?php $locale = app()->getLocale() ?>
@if($locale === 'ru')
<div class="col genre-block text-center">
	<a href="{{route('podcasts.list',$genre->slug)}}" class="genre-href">
		<h4 class="genre-title">{{$genre->title}}</h4>
		@if($genre->podcasts->count() === 0)
			<h5 class="genre-qty text-uppercase">0 подкастов</h5>
		@elseif($genre->podcasts->count() === 1)
			<h5 class="genre-qty text-uppercase">1 Подкаст</h5>
		@elseif($genre->podcasts->count() > 1)
			<h5 class="genre-qty text-uppercase">{{$genre->books->count()}} Подкастов</h5>
		@endif
	</a>
</div>
@else
<div class="col genre-block text-center">
	<a href="{{route('podcasts.list',$genre->slug)}}" class="genre-href">
		<h4 class="genre-title">{{$genre->trans[$locale.'_title']}}</h4>
		@if($genre->podcasts->count() === 0)
			<h5 class="genre-qty">0 @lang('main.podcasts')</h5>
		@elseif($genre->podcasts->count() === 1)
			<h5 class="genre-qty">1 @lang('main.podcasts')</h5>
		@elseif($genre->podcasts->count() > 1)
			<h5 class="genre-qty">{{$genre->podcasts->count()}} @lang('main.podcasts')</h5>
		@endif
	</a>
</div>
@endif