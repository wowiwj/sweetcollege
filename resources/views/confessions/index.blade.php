@extends('layouts.app')


@section('content')

    <div class="confessions row">

        <div class="col-md-8">

            <div class="publish-confessions box">

                <form method="POST" action="{{ route('confessions.store')  }}" enctype="multipart/form-data" name = 'sayConfessions'>

                    {{ csrf_field()  }}

                    <textarea name="content" class="form-control mgb10" rows="3" placeholder="说你喜欢,成你所愿">

                    </textarea>

                    <span class="btn btn-success fileinput-button pull-left">
                        <span class="glyphicon glyphicon-camera">
                        </span>
                    </span>

                    <div id="images">


                    </div>

                    <button class="btn btn-default pushbutton pull-right" type="submit">立即发表</button>


                    <div class="clear"></div>

                </form>

                <div id="dropz"></div>

                <form id="addPhotosForm" method="post" action="{{ route('photos.upload') }}" class="dropzone">
                    {{ csrf_field() }}

                </form>

            </div>

        </div>

        <button class="btn btn-primary">测试</button>

        <div class="col-md-4">
            <div class="box">
                @include('users._baseinfo')
            </div>

        </div>


    </div>



@endsection


@section('scripts.footer')

    <script>

        Dropzone.options.addPhotosForm = {

            paramName:'photo',
            maxFilesize:5,
            acceptedFiles:'.jpg,.jpeg,.png,.bmp',
            init:function () {

                this.on("addedfile", function(file) {
                    // actions...
                    //alert(1);
                });

                this.on('success',function (file,data) {
                    console.log(data);

                    $('#images').append('<input name = "images[]" value="'+ data.id +'">');

                });


            }

        }


    </script>


@endsection