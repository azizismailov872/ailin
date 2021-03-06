<div class="col-2 col-md-3 col-sm-12 col-xs-12 div-sm-block collapse-nav" id="collapse-nav">
	<ul>
	   	<li>
	   		<a class="text-uppercase" href="{{route('index')}}">ГЛАВНАЯ</a>
	   	</li>
	   	@auth
	   	<li>
	   		<a class="text-uppercase" href="{{route('index')}}">История</a>
	   	</li>
	   	@endauth
	   	@guest
	   	<li>
	   		<a class="text-uppercase" href="{{route('showLogin')}}">Вход</a>
	   	</li>
	   	@endguest
	   	<li>
	   		<a class="text-uppercase" href="#">ПРОФИЛЬ</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="#3">АУДИОКНИГИ</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="#4">ТРЕНИНГИ</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="#5">ВОЛОНТЕРЫ</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="{{route('welcome')}}">Welcome</a>
	   	</li>
	   	<li>
	   		<a class="text-uppercase" href="{{route('about')}}">ОБ AILIN</a>
	   	</li>
	</ul>
</div>