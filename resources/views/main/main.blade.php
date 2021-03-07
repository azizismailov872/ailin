@extends('main')

@section('title','Главная страница')

@section('content')
<main role="main" class="container-fluid main-container home-main-div">
	<div class="container-fluid">
		<div class="row">
			<div class="col-4 col-xs-12 col-md-4 col-sm-12">
				<nav class="nav main-nav flex-column">
				  	<a class="nav-link color-black" href="{{route('index')}}" tabindex="0">ГЛАВНАЯ</a>
				  	<a class="nav-link color-black" href="#" tabindex="0">ИСТОРИЯ</a>
				  	<a class="nav-link color-black" href="{{route('audiobooks.genres')}}" tabindex="0">АУДИОКНИГИ</a>
				  	<a class="nav-link color-black" href="#" tabindex="0">ТРЕНИНГИ</a>
				  	<a class="nav-link color-black" href="#" tabindex="0">ВОЛОНТЕРЫ</a>
				  	<a class="nav-link color-black" href="#" tabindex="0" >ВОЗМОЖНОСТИ</a>
				  	<a class="nav-link color-black" href="{{route('about')}}" tabindex="0">ОБ AILIN</a>
				</nav>
			</div>
			<div class="col-8 div-sm-block">
				<div class="col-12">
					<h1 class="heading">Использование платформы</h1>
				</div>
				<br>
				<div class="col-8 col-md-8 col-sm-12 col-xs-12">
					<p alt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				</div>
				<div class="col-8 div-sm-block text-center">
					<img src="{{asset('frontend/images/boton-de-play.png')}}" class="play-main-ico" alt="" loading="lazy">
				</div>

			</div>
		</div>
	</div>
</main>
@endsection

