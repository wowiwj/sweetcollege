<div class="box">
    <div class="padding-md ">
        <div class="list-group text-center">
            <a href="{{ route('users.edit',Auth::user()->id)  }}" class="list-group-item {{ navIsActive('users.edit')  }}">
                个人信息
            </a>
            <a href="{{ route('users.school_edit',Auth::user()->id) }}" class="list-group-item {{ navIsActive('users.school_edit')  }}">
                学校信息
            </a>
            <a href="{{ route('users.adit_avatar',Auth::user()->id) }}" class="list-group-item {{ navIsActive('users.adit_avatar')  }}">
                修改头像
            </a>



            <a href="#" class="list-group-item ">
                消息通知
            </a>
            <a href="#" class="list-group-item ">
                账号绑定
            </a>
            <a href="#" class="list-group-item ">
                修改密码
            </a>
        </div>
    </div>

</div>