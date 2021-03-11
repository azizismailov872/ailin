@extends('main')

@section('title','История')

@section('content')
    <main role="main" class="container-fluid main-container home-main-div">
        <div class="container-fluid">
            <div class="row title-page-block">
                <div class="col-12">
                    <h1 class="display-2 title-page text-uppercase">@lang('main.history')</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">@lang('main.main')</a></li>
                            <li class="breadcrumb-item text-uppercase active" aria-current="page">@lang('main.profile')</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 text-uppercase">
                    @include('profile.parts.audiobooks',['histories' => $histories])
                </div>
            </div>
        </div>
    </main>
@endsection