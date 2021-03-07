@extends('main')

@section('title','Аудиокниги | Жанры')

@section('content')
<main role="main" class="container-fluid main-container home-main-div ">
	<div class="container-fluid">
		<div class="row">
			<div class="row title-page-block">
				<div class="col-12">
					<h1 class="display-2 title-page">АУДИОКНИГИ</h1>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">Главная</a></li>
							<li class="breadcrumb-item text-uppercase active" aria-current="page">Аудиокниги</li>
					  	</ol>
					</nav>
				</div>
			</div>
			<div class="container genre">
				<div class="row">
					<div class="col-12 text-block">
						<h2 class="text-uppercase">жанры</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 genres-wrap">
					<div class="row">

						<div id="myCarousel" data-bs-interval="false" class="carousel slide carousel-dark" data-bs-ride="carousel">
							<div class="col-2">
								<a class="carousel-control-prev carousel-link" tabindex="0" href="{{$list->previousPageUrl()}}" role="button" data-bs-slide="prev">
										<span class="carousel-control-prev-icon" aria-hidden="true"></span>
										<span class="visually-hidden">Previous</span>
								</a>
							</div>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="row">
										@foreach($list as $genre)
											@include('audiobook.parts.genres',['genre' => $genre])
										@endforeach
									</div>
								</div>
							</div>
							<div class="col-2">
								<a class="carousel-control-next carousel-link" tabindex="0" href="{{$list->nextPageUrl()}}" role="button" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Следующее</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
@endsection