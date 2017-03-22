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
                <form class="form-horizontal" method="POST" action="{{ route('users.update_school',Auth::user()->id) }}" accept-charset="UTF-8" enctype="multipart/form-data">

                    {{ csrf_field()  }}
                    {{ method_field('PATCH') }}


                    <div class="form-group">

                        <label for="" class="col-sm-2 control-label">城市</label>
                        <div class="col-sm-6">
                            <select name="city" class="city form-control">
                            </select>
                        </div>
                        <div class="col-sm-4 help-block">
                            学校所在的市 如:扬州市,没有的话Enter添加
                        </div>
                    </div>

                    <div class="form-group">

                        <label for="" class="col-sm-2 control-label">学校</label>
                        <div class="col-sm-6">
                            <select name="school" class="school form-control">
                            </select>
                        </div>
                        <div class="col-sm-4 help-block">
                            如:扬州大学,没有的话Enter添加
                        </div>
                    </div>


                    <div class="form-group">

                        <label for="" class="col-sm-2 control-label">学院</label>
                        <div class="col-sm-6">
                            <select name="academy" class="academy form-control">
                            </select>
                        </div>
                        <div class="col-sm-4 help-block">
                            如:信息工程,没有的话Enter添加
                        </div>
                    </div>


                    <div class="form-group">

                        <label for="" class="col-sm-2 control-label">专业</label>
                        <div class="col-sm-6">
                            <select name="major" class="major form-control">
                            </select>
                        </div>
                        <div class="col-sm-4 help-block">
                            如:软件工程,没有的话Enter添加
                        </div>
                    </div>




                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">入学年份</label>
                        <div class="col-sm-6">
                            <select name="enrollment_year" class="form-control">
                                <option value="2010">2010届</option>
                                <option value="2010">2011届</option>
                                <option value="2010">2012届</option>
                                <option value="2010">2013届</option>
                                <option value="2010">2014届</option>
                                <option value="2010">2015届</option>
                                <option value="2010">2016届</option>
                                <option value="2010">2017届</option>
                                <option value="2010">2018届</option>
                                <option value="2010">2019届</option>
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

@section('scripts.footer')

    <script>



        $(document).ready(function () {

            function  formatCity(city) {
                return '<div class="select2-results-respository clearfix">' +
                '<div class="select2-results-respository__meta">' +
                '<div class="select2-results__title">' +
                city.name ? city.name : "Laravel" +
                '</div>' +
                '</div>' +
                '</div>';

            }

            function  formatCitySelection(city) {

                return city.name || city.text;
            }

            $(".city").select2({
                tags:true,
                placeholder:'请选择城市',
                minimumInputLength: 1,
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
                        return {
                            results: data.data
                        };
                    },
                    cache: true
                },
                escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                templateResult: function (school) {
                    return school.name
                }, // omitted for brevity, see the source of this page
                templateSelection: function (school) {
                    return school.name || school.text;
                }// omitted for brevity, see the source of this page
            });

            function getSchoolData(val) {

                if (isNaN(val))
                {
                    return;
                }

                $(".school").select2({
                    tags:true,
                    placeholder:'请选择学校',
                    minimumInputLength: 1,
                    disabled:false,
                    ajax: {
                        url: "/api/v1/cities/" + val +"/schools",
                        dataType: 'json',
                        delay: 250,
                        data: function (params) {
                            return {
                                q: params.term
                            };
                        },
                        processResults: function (data) {
                            return {
                                results: data.data
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                    templateResult: formatCity, // omitted for brevity, see the source of this page
                    templateSelection: formatCitySelection // omitted for brevity, see the source of this page
                });



            }


            $(".city").change(function(){

                var options = $('.city option');

                if(options.length == 0)
                {

                    $(".school").select2({
                        tags:true,
                        placeholder:'请先学校学校所在的市',
                        disabled:true

                    });
                    return;
                }

                if(options.length != 0){

                    getSchoolData($(this).val());
                    return;
                }


            });

            $(".city").change();





        $(".academy").select2({
            tags:true,
            placeholder:'请选择学院',
            minimumInputLength: 1,
            ajax: {
                url: "/api/v1/academies",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.data
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (academy) {
                return academy.name
            },
            templateSelection: function (academy) {
                return academy.name || academy.text;
            }
        });

        $(".academy").change(function(){

            var options = $('.academy option');

            if(options.length == 0)
            {
                $(".major").select2({
                    tags:true,
                    placeholder:'请先选择学院',
                    disabled:true

                });
                return;
            }

            if(options.length != 0){

                getAcademyData($(this).val());
                return;
            }


        });

        $(".academy").change();


        function getAcademyData(val) {


            if (isNaN(val))
            {
                $(".major").select2({
                    tags:true,
                    placeholder:'请选择专业',
                    disabled:false

                });
                return;
            }

            $(".major").select2({
                tags:true,
                placeholder:'请选择专业',
                minimumInputLength: 1,
                disabled:false,
                ajax: {
                    url: "/api/v1/academies/"+val+"/majors",
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            q: params.term
                        };
                    },
                    processResults: function (data) {
                        return {
                            results: data.data
                        };
                    },
                    cache: true
                },
                escapeMarkup: function (markup) { return markup; },
                templateResult: function (major) {
                    return major.name
                },
                templateSelection: function (major) {
                    return major.name || major.text;
                }
            });


        }

        });



    </script>

@endsection