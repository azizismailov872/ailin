<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="{{asset('frontend/images/logo.jpg')}}">
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<!-- Custom styles for this template -->
	<link href="{{asset('frontend/css/bootstrap.css')}}" rel="stylesheet">
	<link href="{{asset('frontend/css/bootstrap-grid.css')}}" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/style.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/style_sm.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/fonts/font-awesome-4.7.0/css/font-awesome.min.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/video-js.css')}}">
	<link href="{{asset('frontend/css/main.css')}}" rel="stylesheet">
	<script>
		document.getElementById('reg-button-1').onclick = function() {
		  document.getElementById('reg-block-1').classList.toggle('hidden');
		}
	</script>
	<script src="{{asset('js/frontend/playerjs.js')}}" type="text/javascript"></script>
	<script type="text/javascript">
		var mas = []
	</script>
	<title>@yield('title')</title>
</head>
<body>
	@include('components/nav')
	@include('components/menu')
	@yield('content')
	<script src="{{asset('js/frontend/jquery-3.5.1.min.js')}}"></script>
	<script src="{{asset('js/frontend/jquery-ui.min.js')}}"></script>
	<script src="{{asset('js/frontend/script.js')}}"></script>
	<script src="{{asset('js/frontend/bootstrap.min.js')}}"></script>
	<!-- JavaScript Bundle with Popper -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
	{{-- Custom --}}
	<script src="{{asset('js/frontend/phonenumber.js')}}"></script>
	<script src="{{asset('js/frontend/videojs.js')}}"></script>
	<script src="{{asset('js/frontend/main.js')}}"></script>
</body>
</html>