@extends('main')

@section('title','Вход')

@section('content')
<main role="main" class="container-fluid main-container home-main-div">
	<div class="container-fluid">
		@if(!$errors->has('register'))
			<div class="row title-page-block">
				<div class="col-12">
					<h1 class="display-2 title-page">ВОЙТИ</h1>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">Главная</a></li>
							<li class="breadcrumb-item text-uppercase active" aria-current="page">Войти</li>
					  	</ol>
					</nav>
				</div>
			</div>
			<div class="row reg-block-2">
				<form action="{{route('login')}}" method="POST">
					@csrf
					<div class="col-12 title">
						<h1 class="text-uppercase h1-1 text-center">Введите ваш номер телефона</h1>
					</div>
					@if($errors->has('phone'))
					<div class="col-12">
						<div class="alert alert-danger" role="alert" aria-label="Введите номер телефона">
							<span>{{$errors->first('phone')}}</span>
						</div>
					</div>
					@endif
					<div class="col-7 col-xs-12 col-sm-8 col-md-7 buttons text-right">
						<div class="input-group mb-3 col-12 mb-5">
						  	<input 
						  	type="text" 
						  	class="form-control phone-input" 
						  	placeholder="Телефон" 
						  	aria-label="Username" 
						  	aria-describedby="basic-addon1"
						  	name="phone"
						  	value="{{old('phone')}}"
						  	id="phoneNumber"
						  	>
						</div>
						<div class="col-12 ">
							<button type="submit" class="btn btn-secondary btn-lg ">ДАЛЕЕ</button>
						</div>
					</div>
				</form>
			</div>
		@else
		<div class="row title-page-block">
			<div class="col-12">
				<h1 class="display-2 title-page">Регистрация</h1>
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">Главная</a></li>
						<li class="breadcrumb-item text-uppercase active" aria-current="page">Регистрация</li>
				  	</ol>
				</nav>
			</div>
		</div>
		<div class="row reg-block-3">
			<form>
				<div class="col-12 title">
					<h1 class="text-uppercase h1-1">Введите ваш номер телефона</h1>
				</div>
				<div class="col-7 col-xs-12 col-sm-8 col-md-7 buttons text-right">
					<div class="input-group mb-3 col-12 mb-5">
					  	<input 
					  	type="text" 
					  	class="form-control phone-input" 
					  	id="phoneNumber"
					  	placeholder="Телефон" 
					  	aria-label="Username" 
					  	aria-describedby="basic-addon1"
					  	name="phone"
					  	value="{{old('phone')}}"
					  	>
					</div>
				</div>
				<div class="col-12 title" role="alert" aria-label="Мы свяжемся с вами в ближайшее время">
					<h3>Мы свяжемся с вами в ближайшее время !</h3>
				</div>
			</form>
		</div>
		@endif
	</div>
	<div class="free-space container"></div>
</main>
@endsection