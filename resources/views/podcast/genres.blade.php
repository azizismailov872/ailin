@extends('main')

@section('title',__('main.podcasts').' | '.__('main.genres'))

@section('content')
<main role="main" class="container-fluid main-container home-main-div ">
	<div class="container-fluid">
		<div class="row">
			<div class="row title-page-block">
				<div class="col-12">
					<h1 aria-label="@lang('main.podcasts')" class="display-2 title-page text-uppercase">@lang('main.podcasts')</h1>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item text-uppercase">
								<a aria-label="@lang('main.main')" href="{{route('index')}}">@lang('main.main')</a>
							</li>
							<li aria-label="@lang('main.podcasts')" class="breadcrumb-item text-uppercase active" aria-current="page">@lang('main.podcasts')</li>
					  	</ol>
					</nav>
				</div>
			</div>
			<div class="container genre">
				<div class="row">
					<div class="col-12 text-block">
						<h2 class="text-uppercase">@lang('main.genres')</h2>
					</div>
				</div>
			</div>
			<div class="row">
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
									@if(is_object($list) && count($list) > 0)
										<div class="row">
											@foreach($list as $genre)
												@include('podcast.parts.genres',['genre' => $genre])
											@endforeach
										</div>
									@else
										<div class="row justify-content-center">
											<h2 tabindex="0" class="text-center display-2">@lang('messages.noneGenres')</h2>
										</div>
									@endif
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
</main>
@endsection