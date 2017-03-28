@extends('layouts.app')


@section('content')

    <div class="col-md-3 main-col ">
        @include('users._setting_nav')
    </div>


    <div class="col-md-9  left-col ">

        <div class="panel panel-default padding-md">

            <div class="panel-body ">

                <h2>
                    编辑头像
                </h2>
                <hr>
                <form class="form-horizontal" method="POST" action="{{ route('users.update_avatar',Auth::user()->id) }}" accept-charset="UTF-8" enctype="multipart/form-data">

                    {{ csrf_field()  }}
                    {{ method_field('PATCH') }}


                    <div class="text-center">
                        <img width="160px" class="avatar-box img-circle" src="{{ $user->avatar }}" alt="{{ $user->name }}">



                        <br>
                        <br>

                        <input style="width: 200px" class="center-block" name="avatar" type="file">




                        <br>
                        <br>

                        <div class="form-group">

                                <input class="btn btn-primary" id="user-edit-submit" type="submit" value="上传头像">

                        </div>
                    </div>

                    



                </form>
            </div>

        </div>
    </div>



@endsection
