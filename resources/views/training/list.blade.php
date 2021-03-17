@extends('main')

@section('title',__('main.trainings').' |'.$genre->getTitle())

<?php $locale = app()->getLocale(); ?>

@section('content')
<main role="main" class="container-fluid main-container home-main-div ">
	<div class="container-fluid">
		<div class="row">
			<div class="row title-page-block">
				<div class="col-12">
					<h1 class="display-2 title-page text-uppercase" aria-label="@lang('main.trainings')">@lang('main.trainings')</h1>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}" aria-label="@lang('main.main')">@lang('main.main')</a></li>
							<li class="breadcrumb-item text-uppercase"><a aria-label="@lang('main.trainings')" href="{{route('trainings.genres')}}">@lang('main.trainings')</a></li>
							<li class="breadcrumb-item text-uppercase active" aria-current="page">{{$genre->getTitle()}}</li>
					  	</ol>
					</nav>
				</div>
			</div>
			<div class="container-fluid genre">
				<div class="row">
					<div class="col-12 text-block">
						<h2 class="text-uppercase">{{$genre->getTitle()}}</h2>
					</div>
					<div class="col-12 genres-wrap">
						<div class="row">
							<div id="myCarousel" data-bs-interval="false" class="carousel slide carousel-dark" data-bs-ride="carousel">
								@if(isset($list) && $list->lastPage() > 1)
									<div class="col-2">
										<a class="carousel-control-prev carousel-link prev" tabindex="0" href="{{$list->previousPageUrl()}}" role="button" data-bs-slide="prev">
												<span class="carousel-control-prev-icon" aria-hidden="true"></span>
												<span class="visually-hidden">Previous</span>
										</a>
									</div>
								@endif
								<div class="carousel-inner">
								    <div class="carousel-item active">
										<div class="row">
											@foreach($list as $training)
												@include('training.parts.training',['model' => $training])
											@endforeach
								     	</div>
								    </div>
							  	</div>
							  	@if(isset($list) && $list->lastPage() > 1)
									<div class="col-2">
									  	<a class="carousel-control-next carousel-link next" tabindex="0" href="{{$list->nextPageUrl()}}" role="button" data-bs-slide="next">
									    	<span class="carousel-control-next-icon" aria-hidden="true"></span>
									    	<span class="visually-hidden">Следующее</span>
									  	</a>
									</div>
								@endif
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
@endsection