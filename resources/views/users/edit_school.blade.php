@extends('layouts.app')


@section('content')

    <div class="col-md-3 main-col ">
        @include('users._setting_nav')
    </div>


    <div class="col-md-9  left-col ">

        <div class="panel panel-default padding-md">

            <div class="panel-body ">

                <h2>
                    编辑学校信息
                </h2>
                <hr>
                <form class="form-horizontal" method="POST" action="{{ route('users.update',Auth::user()->id) }}" accept-charset="UTF-8" enctype="multipart/form-data">

                    {{ csrf_field()  }}
                    {{ method_field('PATCH') }}


                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">城市</label>
                        <div class="col-sm-6">
                            <select name="city" class="js-example-tags form-control">
                                <option></option>
                            </select>
                        </div>
                        <div class="col-sm-4 help-block">
                            如:扬州市,没有的话回车添加
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">学校</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="real_name" type="text" value="{{ $user->real_name }}">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：扬州大学
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">学院</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="city" type="text" value="{{ $user->city }}">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：信息工程学院
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">专业</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="weibo_name" type="text" value="">
                        </div>
                        <div class="col-sm-4 help-block">
                            如：软件工程
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">入学年份</label>
                        <div class="col-sm-6">
                            <input class="form-control" name="personal_website" type="text" value="">
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

@section('scripts.footer')

    <script>

        function  formatCity(city) {

            return city.name;
        }

        function  formatCitySelection(city) {

            return city.name || city.text;
        }

//        $(".js-example-tags").select2({
//            tags: true,
//            tokenSeparators: [",", " "],
//            createSearchChoice: function(term, data) {
//
//
//                alert(1);
//                if ($(data).filter(function() {
//                            return this.text.localeCompare(term) === 0;
//                        }).length === 0) {
//                    return {
//                        id: term,
//                        text: term
//                    };
//                }
//            },
//            multiple: true,
//            ajax: {
//                url: '/api/v1/cities',
//                dataType: "json",
//
//                delay: 250,
//                data: function(term, page) {
//                    return {
//                        q: term
//                    };
//                },
//                results: function(data, page) {
//                    return {
//                        results: data.data.name
//                    };
//                }
//            }
//        });



        $(".js-example-tags").select2({
            tags:true,
            placeholder:'请选择城市',
            createSearchChoice: function(term, data) {
                alert(1);
                if ($(data).filter(function() {
                            return this.text.localeCompare(term) === 0;
                        }).length === 0) {
                    return {
                        id: term,
                        text: term
                    };
                }
            },
            ajax: {
                url: "/api/v1/cities",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term
                    };
                },
                processResults: function (data) {


                    var append = [{}];

                    if (data.data.length == 0)
                    {
                        console.log(data.data);
                        console.log(this.$element);
//                        return {
//                            results: [{
//                                'id':'999',
//                                'name':'舒服舒服'
//                            }]
//                        };
                    }

                    return {
                        results: data.data
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatCity, // omitted for brevity, see the source of this page
            templateSelection: formatCitySelection // omitted for brevity, see the source of this page
        })
        
        


    </script>

@endsection