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

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">入学年份</label>
                        <div class="col-sm-6">
                            <select name="enrollment_year" class="form-control">
                                <option value="0">未选择</option>
                                <option value="2010" {{ $user->enrollment_year != 2010 ?: 'selected' }}>2010届</option>
                                <option value="2011" {{ $user->enrollment_year != 2011 ?: 'selected' }}>2011届</option>
                                <option value="2012" {{ $user->enrollment_year != 2012 ?: 'selected' }}>2012届</option>
                                <option value="2013" {{ $user->enrollment_year != 2013 ?: 'selected' }}>2013届</option>
                                <option value="2014" {{ $user->enrollment_year != 2014 ?: 'selected' }}>2014届</option>
                                <option value="2015" {{ $user->enrollment_year != 2015 ?: 'selected' }}>2015届</option>
                                <option value="2016" {{ $user->enrollment_year != 2016 ?: 'selected' }}>2016届</option>
                                <option value="2017" {{ $user->enrollment_year != 2017 ?: 'selected' }}>2017届</option>
                                <option value="2018" {{ $user->enrollment_year != 2018 ?: 'selected' }}>2018届</option>
                                <option value="2019" {{ $user->enrollment_year != 2019 ?: 'selected' }}>2019届</option>
                            </select>
                        </div>
                        <div class="col-sm-4 help-block">
                            如：2014年
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
