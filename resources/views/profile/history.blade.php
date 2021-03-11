@extends('main')

@section('title','История')

@section('content')
<main role="main" class="container-fluid main-container home-main-div">
    <div class="container-fluid">
        <div class="row title-page-block">
            <div class="col-12">
                <h1 class="display-2 title-page">ИСТОРИЯ</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item text-uppercase"><a href="#">Главная</a></li>
                        <li class="breadcrumb-item text-uppercase active" aria-current="page">Профиль</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 text-uppercase">
                <div class="item-collapse">
                    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapseAudioBooks" role="button" aria-expanded="false" aria-controls="collapseAudioBooks">
                        <h2>1. АУДИОКНИГИ</h2>
                        <img src="images/breadcrumb.svg" alt="">
                    </a>
                    <div class="collapseeee" id="collapseAudioBooks" style="padding-left: 4.2rem;">
                        <div class="collapse-pad"></div>
                        <div class="collapse-block position-relative">
                            <div class="col-12 first-collapse-block">
                                <p class="collapse-item-title" onclick="player.api('toggle')" tabindex="<0></0>" aria-label="АудиоКнига Гарри поттер     нажмите чтоб начать прослушивание">ГАРРИ ПОТТЕР</p>
                                <h3 class="collapse-item-category">ФАНТАСТИКА</h3>
                            </div>
                            <div class="col-12 col-xs-12 col-sm-10 col-md-6 col-xl-4 player-div collapse-player">
                                <div class="row position-relative">
                                    <button onclick="player1.api('toggle'); " id="playbut_player1" class="player_play_button play-icon"></button>
                                    <div id="player1" class="playerjs" title="123"></div>
                                    <script>
                                    var player1 = new Playerjs({ id: "player1", file: "./78e6bcb16e5b0a.mp3" });
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-block position-relative">
                            <div class="col-12 first-collapse-block">
                                <p class="collapse-item-title" onclick="player.api('toggle')" tabindex="<0></0>" aria-label="АудиоКнига Гарри поттер     нажмите чтоб начать прослушивание">ГАРРИ ПОТТЕР</p>
                                <h3 class="collapse-item-category">ФАНТАСТИКА</h3>
                            </div>
                            <div class="col-12 col-xs-12 col-sm-10 col-md-6 col-xl-4 player-div collapse-player">
                                <div class="row position-relative">
                                    <button onclick="player2.api('toggle'); " id="playbut_player2" class="player_play_button play-icon"></button>
                                    <div id="player2" class="playerjs" title="123"></div>
                                    <script>
                                    var player2 = new Playerjs({ id: "player2", file: "./5b503e1c861d605bd13c18e9aa7c6c24.mp3" });
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-pad"></div>
                    </div>
                </div>
                <div class="collapse-pad"></div>
                <div class="item-collapse">
                    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapseTrainings" role="button" aria-expanded="false" aria-controls="collapseTrainings">
                        <h2>2. тренинги</h2>
                        <img src="images/breadcrumb.svg" alt="">
                    </a>
                    <div class="collapse" id="collapseTrainings" style="padding-left: 4.2rem;">
                        <div class="collapse-pad"></div>
                        <div class="collapse-block">
                            <div class="col-12 first-collapse-block">
                                <p class="collapse-item-title">Марк бартон “Я-женщина”</p>
                                <h3 class="collapse-item-category">Психология, философия</h3>
                            </div>
                            <div class="col-12 collapse-player">
                                <div class="row">
                                    <img src="images/play.svg" class="play-collapse" alt="" loading="lazy">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="player-time">
                                        <p>1:20:26</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-pad"></div>
                    </div>
                </div>
                <div class="collapse-pad"></div>
                <div class="item-collapse">
                    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapsePodcasts" role="button" aria-expanded="false" aria-controls="collapsePodcasts">
                        <h2>3. Подкасты</h2>
                        <img src="images/breadcrumb.svg" alt="">
                    </a>
                    <div class="collapse" id="collapsePodcasts" style="padding-left: 4.2rem;">
                        <div class="collapse-pad"></div>
                        <div class="collapse-block">
                            <div class="col-12 first-collapse-block">
                                <p class="collapse-item-title">Марк бартон “Я-женщина”</p>
                                <h3 class="collapse-item-category">Психология, философия</h3>
                            </div>
                            <div class="col-12 collapse-player">
                                <div class="row">
                                    <img src="images/play.svg" class="play-collapse" alt="" loading="lazy">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="player-time">
                                        <p>1:20:26</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-pad"></div>
                    </div>
                </div>
                <div class="collapse-pad"></div>
                <div class="item-collapse">
                    <a class="collapse-link col-12" data-bs-toggle="collapse" href="#collapseСapabilities" role="button" aria-expanded="false" aria-controls="collapseСapabilities">
                        <h2>4. Возможности</h2>
                        <img src="images/breadcrumb.svg" alt="">
                    </a>
                    <div class="collapse" id="collapseСapabilities" style="padding-left: 4.2rem;">
                        <div class="collapse-pad"></div>
                        <div class="collapse-block">
                            <div class="col-12 first-collapse-block">
                                <p class="collapse-item-title">Марк бартон “Я-женщина”</p>
                                <h3 class="collapse-item-category">Психология, философия</h3>
                            </div>
                            <div class="col-12 collapse-player">
                                <div class="row">
                                    <img src="images/play.svg" class="play-collapse" alt="" loading="lazy">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="player-time">
                                        <p>1:20:26</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse-pad"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection