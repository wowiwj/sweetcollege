@extends('layouts.app')


@section('content')

    <div class="confessions row">

        <div class="col-md-8">


            {{--<confessions-publisher></confessions-publisher>--}}

            <div class="publish-confessions box">

                <form method="POST" action="{{ route('confessions.store')  }}" enctype="multipart/form-data" name = 'sayConfessions'>

                    {{ csrf_field()  }}


                    <textarea name="content" class="form-control mgb10" rows="3" placeholder="说你喜欢,成你所愿">

                    </textarea>

                    <span class="btn btn-success fileinput-button pull-left">
                        <span class="glyphicon glyphicon-camera">
                        </span>
                        <input name="file[]" type="file" id="filesInput" >
                    </span>

                    <button class="btn btn-default pushbutton pull-right" type="submit">立即发表</button>


                    <img id="preview"  alt="">

                    <div class="clear"></div>

                </form>

            </div>

        </div>

        <div class="col-md-4">
            <div class="box">
                @include('users._baseinfo')
            </div>

        </div>


    </div>



@endsection