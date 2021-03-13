@extends('main')

@section('title',__('main.main'))

@section('content')
<main role="main" class="container-fluid main-container home-main-div mb-3">
	<div class="container-fluid">
		<div class="row">
			<div class="col-6 col-xs-12 col-md-4 col-sm-12">
				<nav class="nav main-nav flex-column">
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.main')" href="{{route('index')}}" tabindex="0">@lang('main.main')</a>
				  	@auth
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.history')" href="{{route('profile.history')}}" tabindex="0">@lang('main.history')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.logout')" href="{{route('logout')}}" tabindex="0">@lang('main.logout')</a>
				  	@endauth
				  	@guest
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.login')" href="{{route('showLogin')}}" tabindex="0">@lang('main.login')</a>
				  	@endguest
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.changeLocale')" href="{{route('language')}}" tabindex="0">@lang('main.changeLocale')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.audiobooks')" href="{{route('audiobooks.genres')}}" tabindex="0">@lang('main.audiobooks')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.podcasts')" href="{{route('podcasts.genres')}}" tabindex="0">@lang('main.podcasts')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.trainings')" href="{{route('trainings.genres')}}" tabindex="0">@lang('main.trainings')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.volunteers')" href="{{route('showVolunteers')}}" tabindex="0">@lang('main.volunteers')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.opportunities')" href="{{route('welcome')}}" tabindex="0" >@lang('main.opportunities')</a>
				  	<a class="nav-link color-black text-uppercase" aria-label="@lang('main.about')" href="{{route('about')}}" tabindex="0">@lang('main.about')</a>
				</nav>
			</div>
			<div class="col-6 offset-1 div-sm-block">
				<div class="col-12">
					<h1 class="heading">@lang('pages.usingPlatform')</h1>
				</div>
				<br>
				<div class="col-12">
					<p class="description-play">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				</div>
				<div class="col-8 d-flex justify-content-center">
					<button class="play-btn play-description" aria-label="@lang('main.listenDesc')">
						<i class="fa fa-play play-icn" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</main>
@endsection

