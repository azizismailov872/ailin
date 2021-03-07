<div class="col genre-block text-center">
	<a href="{{route('audiobooks.list',$genre->slug)}}" class="genre-href">
		<h4 class="genre-title">{{$genre->title}}</h4>
		@if($genre->books->count() === 0)
			<h5 class="genre-qty">0 АУДИОКНИГ</h5>
		@elseif($genre->books->count() === 1)
			<h5 class="genre-qty">1 АУДИОКНИГА</h5>
		@elseif($genre->books->count() > 1)
			<h5 class="genre-qty">{{$genre->books->count}} АУДИОКНИГИ</h5>
		@endif
	</a>
</div>