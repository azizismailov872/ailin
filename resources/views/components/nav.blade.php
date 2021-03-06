@auth
<nav class="navbar navbar-expand-md d-flex container-fluid nav-container mb-4 d-flex justify-content-between">
	<!-- Collapse button -->
	<button class=" navbar-toggler d-inline-block nav-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
	    aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="@lang('main.openMenu')">
	    <div class="animated-icon1"><span></span><span></span><span></span></div>
	</button>
	</button>
	<div class="navbar-brand" id="navbarsExampleDefault">
		<a class="navbar-brand" href="{{route('index')}}" aria-label="Логотип Ailin"><img src="{{asset('frontend/images/logo.jpg')}}" class="nav-logo" alt="logo" loading="lazy"> AILIN</a>
	</div>
</nav>
@endauth
@guest
<nav class="navbar navbar-expand-md d-flex container-fluid  nav-container mb-4 d-flex justify-content-lg-between align-items-center">
	<a class="nav-link color-black text-uppercase" href="{{route('showLogin')}}">@lang('main.login')</a>
	<a class="nav-link color-black text-uppercase" href="{{route('language')}}">@lang('main.changeLocale')</a>
	<div class="navbar-brand" id="navbarsExampleDefault">
		<a class="navbar-brand" href="{{route('index')}}"><img src="{{asset('frontend/images/logo.jpg')}}" class="nav-logo" alt="" loading="lazy">AILIN</a>
	</div>
</nav>
@endguest