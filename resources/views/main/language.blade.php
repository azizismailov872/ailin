@extends('main')

@section('title','Выберите язык')

@section('content')
	<main role="main" class="container-fluid main-container home-main-div">
		<div class="container-fluid">
			<div class="row title-page-block">
				<div class="col-12">
					<h1 class="display-3 title-page">Выбрать язык платформы</h1>
					<nav aria-label="breadcrumb">
					  <ol class="breadcrumb">
						<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">Главная</a></li>
						<li class="breadcrumb-item text-uppercase active" aria-current="page">Выбрать язык</li>
					  </ol>
					</nav>
				</div>
			</div>
			<div class="row reg-block-1">
				<div class="col-12 title">
					<h1 class="text-uppercase h1-1 text-center" aria-label="Выберите язык платформы" tabindex="0">Выберите язык использования</h1>
				</div>
				<div class="flex buttons">
					<a href="{{route('setLang','ru')}}" class="col btn btn-primary btn-lg">Русский</a>
					<a href="{{route('setLang','kz')}}" class="col btn btn-primary btn-lg">Казакша</a>
					<a href="{{route('setLang','tg')}}" class="btn col btn-primary btn-lg">Тоҷикӣ</a>
					<a href="{{route('setLang','kg')}}" class="col btn btn-primary btn-lg">Кыргызча</a>
					<a href="{{route('setLang','uz')}}" class="col btn btn-primary btn-lg">Ўзбекча</a>
				</div>
			</div>
		</div>
		<div class="free-space container"></div>
	</main>
@endsection