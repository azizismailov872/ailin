@extends('main')

@section('title','Выберите язык')

@section('content')
	<main role="main" class="container-fluid main-container home-main-div">
		<div class="container-fluid">
			<div class="row title-page-block">
				<div class="col-12">
					<h1 class="display-4 title-page">@lang('pages.languageHeader')</h1>
					<nav aria-label="breadcrumb">
					  <ol class="breadcrumb">
						<li class="breadcrumb-item text-uppercase" aria-label="@lang('main.main')"><a aria-label="@lang('main.main')" href="{{route('index')}}">@lang('main.main')</a></li>
						<li class="breadcrumb-item text-uppercase active" aria-current="page">@lang('pages.selectLang')</li>
					  </ol>
					</nav>
				</div>
			</div>
			<div class="row reg-block-1">
				<div class="col-12 title">
					<h1 class="text-uppercase h1-1 text-center" aria-label="@lang('pages.chooseLanguageOfUse')" tabindex="0">@lang('pages.chooseLanguageOfUse')</h1>
				</div>
				<div class="flex buttons">
					<a href="{{route('setLang','en')}}" class="col btn btn-primary btn-lg">English</a>
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