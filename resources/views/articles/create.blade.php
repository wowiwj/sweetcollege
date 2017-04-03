@extends('layouts.app')

@section('content')

    <div class="confessions row">

        <div class=" col-md-12">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">创作文章</h3>
                </div>
                <div class="panel-body">

                    @include('layouts.partials.errors')

                    <form method="post" action="{{ route('articles.store') }}" enctype="multipart/form-data">

                        {{ csrf_field() }}

                        <div class="form-group">
                            <label for="title">文章标题</label>
                            <input type="text"
                                   name="title"
                                   class="form-control"
                                   id="title"
                                   placeholder="请输入文章标题"
                                   value="{{ old('title') }}"
                            >
                        </div>

                        <div class="form-group">
                            <label for="exampleInputFile">文章缩略图</label>
                            <input type="file" id="titleImage" name="pageImage">
                            <p class="help-block">该图片将在文章标题的前面显示.</p>
                        </div>

                        <label for="content">文章内容</label>
                        <div id="editormd_id">

                            <textarea name="content" style="display:none;"></textarea>
                        </div>

                        <div class="publish pull-right">
                            <button name="save" type="submit" class="btn btn-default">保存</button>

                            <button name="publish" type="submit" class="btn btn-primary">发表</button>

                        </div>

                    </form>





                </div>
            </div>

        </div>


    </div>





@endsection

@section('scripts.header')

    {!! editor_css() !!}

@endsection

@section('scripts.footer')
    {!! editor_js() !!}
@endsection