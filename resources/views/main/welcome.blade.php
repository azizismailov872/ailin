@extends('main')

@section('title',__('main.opportunities'))

@section('content')
<main role="main" class="container-fluid main-container home-main-div">
	<div class="container-fluid">
		<div class="row">
			<div class="col-4 col-xs-12 col-md-4 col-sm-12">
				<div class="col-12">
					<div class="nav flex-column nav-pills me-3" id="welcome-tab" role="tablist" aria-orientation="vertical">
						<a tabindex="1" class="heading" id="welcome-about-block-tab" data-bs-toggle="pill" data-bs-target="#welcome-about-block" type="button" role="tab" aria-controls="welcome-about-block" aria-selected="true">@lang('main.about')</a>
						<a tabindex="1" class="heading" id="welcome-about2-block-tab" data-bs-toggle="pill" data-bs-target="#welcome-about2-block" type="button" role="tab" aria-controls="welcome-about2-block" aria-selected="false">@lang('pages.aboutBlind')</a>
						<a tabindex="1" class="heading" href="{{route('posts')}}">@lang('main.posts')</a>
					</div>
				</div>
				<br>
			</div>
			<div class="col-8 col-xs-12 col-md-8 col-sm-12">
				<div class="tab-content" id="welcome-tabContent">
				<div class="tab-pane fade show active" id="welcome-about-block" role="tabpanel" aria-labelledby="welcome-about2-block-tab">
							<div class="col-12 inner-player">
								<div class="row">
									<div class="col-12">
										<h1 tabindex="1" class="heading">@lang('pages.aboutPlatform')</h1>
										<hr>
									</div>
									<br>
									<div class="col-8 col-md-8 col-sm-12 col-xs-12">
										<p tabindex="1">@lang('contents.aboutAilin')</p>
									</div>
									<video
										id="my-video"
										class="video-js"
										controls
										preload="auto"
										height="auto"
										poster=""
										data-setup="{}"
									>
										<source src="{{asset('test.mp4')}}" type="video/mp4" />
										<!--<source src="nevergonnagiveyouup.mp4" type="video/webm" />-->
										<p class="vjs-no-js">
											Ваш браузер не поддерживает видео

										</p>
									</video>
								</div>
							</div>
					</div>
				<div class="tab-pane fade" id="welcome-about2-block" role="tabpanel" aria-labelledby="welcome-about2-block-tab">
						<div class="col-12 inner-player">
							<div class="row">
								<div class="col-12">
									<h1 tabindex="1" class="heading">@lang('pages.aboutBlind')</h1>
									<hr>
								</div>
								<br>
								<div class="col-8 col-md-8 col-sm-12 col-xs-12">
									<p tabindex="1">@lang('contents.aboutBlind')</p>
								</div>
								<nav class="nav main-nav welcome-nav flex-column">
				  				<a class="nav-link color-black" href="#">НАЗВАНИЕ СТАТЬИ</a>
				  				<a class="nav-link color-black" href="#">НАЗВАНИЕ ВИДЕО</a>
				  				<a class="nav-link color-black" href="#">НАЗВАНИЕ ПОДКАСТА</a>
				  				<a class="nav-link color-black" href="#">НАЗВАНИЕ СТАТЬИ</a>
				  				<a class="nav-link color-black" href="#">НАЗВАНИЕ ВИДЕО</a>
				  				<a class="nav-link color-black" href="#">НАЗВАНИЕ ПОДКАСТА</a>
							</nav>
							</div>
						</div>
					</div>
				</div>
				<br>
			</div>
		</div>
	</div>
</main>
@endsection