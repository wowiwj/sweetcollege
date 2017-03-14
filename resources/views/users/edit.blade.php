@extends('layouts.app')


@section('content')

    <div class="col-md-3 main-col ">
        @include('users._setting_nav')
    </div>


    <div class="col-md-9  left-col ">

        <div class="panel panel-default padding-md">

            <div class="panel-body ">

                <h2>
                     编辑个人资料
                </h2>
                <hr>
                <form class="form-horizontal" method="POST" action="https://laravel-china.org/users/6932" accept-charset="UTF-8" enctype="multipart/form-data">
                    <input name="_method" type="hidden" value="PATCH"><input type="hidden" name="_token" value="24DZf2R5Iy3DKn7tnZeGmTmA5fsfXhHozzVEpLqg"><div class="form-group">
                        <label for="" class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-6">
                            <select class="form-control" name="gender"><option value="unselected" selected="">未选择</option>
                                <option value="male">男</option>
                                <option value="female">女</option></select>
                        </div>

                        <div class="col-sm-4 help-block"></div>
                    </div>



                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">邮 箱</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="email" type="text" value="35649084@qq.com">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：name@website.com
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">真实姓名</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="real_name" type="text" value="">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：李小明
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">城市</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="city" type="text" value="">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：北京、广州
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">微博用户名</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="weibo_name" type="text" value="">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：wangju
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">微博个人页面</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="weibo_link" type="text" value="">
                        </div>
                        <div class="col-sm-4 help-block">
                            微博个人主页链接，如：http://weibo.com/laravelnews
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">个人网站</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="personal_website" type="text" value="">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：example.com，不需要加前缀 https://
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">个人简介</label>
                        <div class="col-sm-6">
                            <textarea class="form-control" rows="3" name="introduction" cols="50" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                        </div>
                        <div class="col-sm-4 help-block">
                            请一句话介绍你自己，大部分情况下会在你的头像和名字旁边显示
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">署名</label>
                        <div class="col-sm-6">
                            <textarea class="form-control" rows="3" name="signature" cols="50" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                        </div>
                        <div class="col-sm-4 help-block">
                            文章署名，会拼接在每一个你发表过的帖子内容后面。支持 Markdown。
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-6">
                            <input class="btn btn-primary" id="user-edit-submit" type="submit" value="应用修改">
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>



@endsection