@extends('layouts.app')

@section('content')

    <div class="confessions row">

        <div class="col-md-9">
            <div class="jumbotron">
                <div class="container">
                    <h2>发布文章!</h2>
                    <p>
                        发表你的想法，见闻
                    </p>
                    <p><a class="btn btn-primary btn-lg" href="{{ route('articles.create') }}" role="button">发表文章 »</a></p>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">文章列表</h3>
                </div>
                <div class="panel-body">

                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://lorempixel.com/200/200/?29534" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">文章</h4>
                            .文章文章个hiUS个is贵宿管已宿管已已USA鬼画符is福施福
                        </div>
                    </div>



                </div>
            </div>

        </div>

        <div class="col-md-3">
            <div class="box hidden-sm">
                @include('users._baseinfo',['user'=>Auth::user()])
            </div>
        </div>

    </div>





@endsection