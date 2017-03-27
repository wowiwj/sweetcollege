

<div class="padding-md user-basic-info">
    <div style="">
        <div class="media">
            <div class="media-left">
                <div class="image">
                    <a href="#" class="popover-with-html" data-content="修改头像" data-original-title="" title="">
                        <img class="media-object avatar-80 avatar img-thumbnail" src="{{ $user->avatar }}"></a>
                </div>

            </div>
            <div class="media-body">
                <h3 class="media-heading">

                    {{ $user->name  }}

                </h3>
                <div class="item">

                </div>
                <div class="item">
                    第 {{ $user->id  }} 位会员
                </div>
                <div class="item number">
                    注册于 <span class="timeago popover-with-html" data-content="2016-11-18 20:26:34" data-original-title="" title="">{{ Auth::user()->created_at->diffForhumans()  }}</span>
                </div>

                <div class="item number">
                    活跃于 <span class="timeago popover-with-html" data-content="2017-03-14 10:23:57" data-original-title="" title="">1分钟前</span>
                </div>

            </div>
        </div>

    </div>

    <hr>
    <div class="follow-info row">
        <div class="col-xs-4">
            <a class="counter" href="#">0</a>
            <a class="text" href="#">关注者</a>
        </div>
        <div class="col-xs-4">
            <a class="counter" href="#">0</a>
            <a class="text" href="#">讨论</a>
        </div>
        <div class="col-xs-4">
            <a class="counter" href="#">0</a>
            <a class="text" href="#">文章</a>
        </div>
    </div>

    <hr>
    <a class="btn btn-primary btn-block" href="{{ route('users.edit',Auth::user()->id)  }}" id="user-edit-button">
        <i class="fa fa-edit"></i> 编辑个人资料
    </a>

</div>