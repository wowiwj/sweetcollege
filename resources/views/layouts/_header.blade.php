<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                &nbsp;<li class="{{ Request::is('/') ? 'active' : '' }}"><a href="/">主页</a></li>
                <li class="{{ Request::is('confessions*') ? 'active' : '' }}"><a href="{{ route('confessions.index') }}">表白墙</a></li>
                <li class="{{ Request::is('articles*') ? 'active' : '' }}"><a href=" {{ route('articles.index') }}">文学</a></li>
                <li class="{{ Request::is('tasks*') ? 'active' : '' }}"><a href="{{ route('tasks.index') }}">众包</a></li>
                <li><a href="#">活动</a></li>
                <li><a href="#">话题与交流</a></li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ route('login') }}">登录</a></li>
                    <li><a href="{{ route('register') }}">注册</a></li>
                @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">


                            <li>
                                <a href="{{ route('users.show',Auth::user()->id)  }}">个人中心</a>
                            </li>

                            <li><a href="{{ route('users.edit', Auth::user()->id) }}">编辑资料</a></li>

                            <li class="divider"></li>

                            <li>
                                <a class="btn bg-danger" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    退出登录
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>


                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>