@extends('layouts.app')

@section('content')

    <div class="confessions row">

        <div class="col-md-9">
            <div class="jumbotron">
                <div class="container">
                    <h2>众包平台!</h2>
                    <p>
                        如果你需要任何帮助,都可以在这里发布任务,让校友帮助你
                    </p>
                    <p><a class="btn btn-primary btn-lg" href="{{ route('login') }}" role="button">发布任务 »</a></p>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">任务列表</h3>
                </div>
                <div class="panel-body">

                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://lorempixel.com/200/200/?29534" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">任务111</h4>
                            .这是第一个任务,任务描述任务描述,任务描述
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