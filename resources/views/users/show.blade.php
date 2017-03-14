@extends('layouts.app')


@section('content')


    <div class="users-show row">

        <div class="col-md-4">

            <div class="box">
                @include('users._baseinfo')
            </div>

            <div class="box text-center">

                @include('users._published')
            </div>

        </div>

        <div class="main-col col-md-8 left-col">


            <div class="panel panel-default">
                <div class="panel-heading">
                    专栏文章
                </div>

                <div class="panel-body">
                    <div class="empty-block">
                        <a href="#" class="btn btn-primary no-pjax">
                            <i class="fa fa-paint-brush" aria-hidden="true"></i>  创作文章
                        </a>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    最近话题
                </div>

                <div class="panel-body">
                    <div class="empty-block">没有任何数据~~</div>
                </div>
            </div>


            <div class="panel panel-default">
                <div class="panel-heading">
                    最新评论
                </div>

                <div class="panel-body">
                    <div class="empty-block">还未留下任何评论~~</div>
                </div>
            </div>

        </div>


    </div>

@endsection