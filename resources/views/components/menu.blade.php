<div class="col-2 col-md-3 col-sm-12 col-xs-12 div-sm-block collapse-nav" id="collapse-nav">
	<ul>
	   	<li>
	   		<a class="text-uppercase" href="{{route('index')}}">@lang('main.main')</a>
	   	</li>
	   	@auth
	   	<li>
	   		<a class="text-uppercase" href="{{route('index')}}">@lang('main.history')</a>
	   	</li>
	   	@endauth
	   	@guest
	   	<li>
	   		<a class="text-uppercase" href="{{route('showLogin')}}">@lang('main.login')</a>
	   	</li>
	   	@endguest
	   	<li>
	   		<a class="text-uppercase" href="{{route('audiobooks.genres')}}">@lang('main.audiobooks')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="#4">@lang('main.trainings')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="#5">@lang('main.volunteers')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="{{route('welcome')}}">Возможности</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="{{route('about')}}">@lang('main.about')</a>
	   	</li>
	</ul>
</div>