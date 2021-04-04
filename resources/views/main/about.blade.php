@extends('main')

@section('title',__('main.about'))
@section('content')
<main role="main" class="container-fluid main-container home-main-div">
	<div class="container-fluid">
		<div class="row title-page-block">
			<div class="col-12">
				<h1 class="display-2 title-page text-uppercase">@lang('main.about')</h1>
				<nav aria-label="breadcrumb">
				  <ol class="breadcrumb">
					<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">@lang('main.main')</a></li>
					<li class="breadcrumb-item text-uppercase active" aria-current="page">@lang('main.about')</li>
				  </ol>
				</nav>
			</div>
		</div>
		<div class="row" >
			<div class="col-12 col-xs-12 col-sm-12 col-md-12 text-uppercase">
				<div class="text-block col-12">
					<h2>@lang('pages.purposeOfCreation')</h2>
						<div class="row">
						<div class="col-1"> </div>
						<div class="col-8 text">
							@lang('contents.targetOfCreation')
						</div>
						<div class="col-3"></div>
					</div>
				</div>
				<div class="text-block col-12">
					<h2>@lang('pages.authors')</h2>
					<div class="row">
						<div class="col-1"> </div>
						<div class="col-8 text">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</div>
						<div class="col-3"></div>
					</div>
					<div class="row">
						<div class="col-1"> </div>
						<div class="col-8 text">
							<div class="row">
								<div class="card-person">
									<div class="cyrcle"></div>
									<p class="text-center">Какое то имя</p>
								</div>
								<div class="card-person">
									<div class="cyrcle"></div>
									<p class="text-center">Какое то имя</p>
								</div>
								<div class="card-person">
									<div class="cyrcle"></div>
									<p class="text-center">Какое то имя</p>
								</div>
								<div class="card-person">
									<div class="cyrcle"></div>
									<p class="text-center">Какое то имя</p>
								</div>
							</div>
						</div>
						<div class="col-3"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
@endsection