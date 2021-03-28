@extends('main')

@section('title','Посты')
@section('content')
<main role="main" class="container-fluid main-container home-main-div ">
    <div class="container-fluid">
        <div class="row title-page-block">
            <div class="col-12">
                <h1 class="display-2 title-page">@lang('main.posts')</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item text-uppercase"><a href="{{route('index')}}">@lang('main.main')</a></li>
                        <li class="breadcrumb-item text-uppercase active" aria-current="page">@lang('main.posts')</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 text-uppercase">
                <div class="text-block forum-block col-12">
                    <div class="row">
                        <div class="col-12 text forum-block">
                            @if(count($posts) > 0)
                                <ul class="circle">
                                    @foreach($posts as $post)
                                        <hr class="disck">
                                        <li tabindex="1">{{mb_substr($post->getTitle(),0,30)}}</li>
                                        <div style="width: 100%" class="text-read-next">
                                            <a href="#" data-toggle="modal" tabindex="1" data-target="#modal{{$post->id}}">@lang('main.readMore')</a>
                                        </div>
                                        <div class="modal fade" id="modal{{$post->id}}" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
                                            <div class="modal-dialog modal-xl" role="document">
                                                <div class="modal-content forum">
                                                    <div class="modal-header-forum">
                                                        <button type="button" class="close" data-dismiss="modal" tabindex="1" aria-label="Закрыть">
                                                            <span aria-hidden="true">&times</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h3 tabindex="1">{{$post->getTitle()}}</h3>
                                                        <p tabindex="1">{{$post->getContent()}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    <a data-toggle="collapse" class="collapse-link-forum collapsed" href="#collapseAddPosts" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <div class="col-12 collapse-block d-flex justify-content-center">
                                            <img src="images/collapse-icon.svg" alt="">
                                        </div>
                                    </a>
                                </ul>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection