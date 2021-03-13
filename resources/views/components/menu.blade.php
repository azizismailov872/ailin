<div class="col-2 col-md-3 col-sm-12 col-xs-12 div-sm-block collapse-nav" id="collapse-nav">
	<ul>
	   	<li>
	   		<a aria-label="@lang('main.main')" class="text-uppercase" href="{{route('index')}}">@lang('main.main')</a>
	   	</li>
	   	@auth
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.history')" href="{{route('profile.history')}}">@lang('main.history')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.logout')" href="{{route('logout')}}">@lang('main.logout')</a>
	   	</li>
	   	@endauth
	   	@guest
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.login')" href="{{route('showLogin')}}">@lang('main.login')</a>
	   	</li>
	   	@endguest
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.changeLocale')" href="{{route('language')}}">@lang('main.changeLocale')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.audiobooks')" href="{{route('audiobooks.genres')}}">@lang('main.audiobooks')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.trainings')" href="{{route('trainings.genres')}}">@lang('main.trainings')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.podcasts')" href="{{route('podcasts.genres')}}">@lang('main.podcasts')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.volunteers')" href="{{route('showVolunteers')}}">@lang('main.volunteers')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.opportunities')" href="{{route('welcome')}}">@lang('main.opportunities')</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" aria-label="@lang('main.about')" href="{{route('about')}}">@lang('main.about')</a>
	   	</li>
	</ul>
</div>