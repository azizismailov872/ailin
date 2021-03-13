@extends('main')

@section('title',__('main.volunteers'))

@section('content')
<main role="main" class="container-fluid main-container home-main-div ">
	<div class="container-fluid">
		<div class="row">
			<div class="row title-page-block">
				<div class="col-12">
					<h1 class="display-2 title-page text-uppercase">@lang('main.volunteers')</h1>
					<nav aria-label="breadcrumb">
					  <ol class="breadcrumb">
						<li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">@lang('main.main')</a></li>
						<li class="breadcrumb-item text-uppercase active" aria-current="page">@lang('main.volunteers')</li>
					  </ol>
					</nav>
				</div>
			</div>
			<div class="col-12 col-xs-12 col-sm-12 col-md-12 text-uppercase">
				<div class="text-block col-12">
					<h2>@lang('pages.ailinHelp'):</h2>
					<div class="row">
						<div class="col-12 p-vol">
							<p>
								- @lang('pages.groupHelp')<br>
								- @lang('pages.studyMaterialHelp')
							</p>
						</div>
						<div class="col-12 title-input">
							<h2 class="font-48px text-none">@lang('pages.enterPhone')</h2>
							<p class="text-desc-input text-none">@lang('pages.contactLater')</p>
						</div>
						<div class="col-7 col-xs-12 col-sm-8 col-md-7 buttons text-right">
							<div class="input-group vol-input col-10 ">
							  	<input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
							  	<button type="submit" class="btn btn-secondary text-uppercase">@lang('main.submit')</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
@endsection