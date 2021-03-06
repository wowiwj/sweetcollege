<div class="confession-content">
    <div class="fh5co-property box">

        <div class="fh5co-property-innter ">

            <div class="avatar-box">
                <a href="{{ route('users.show',$confession->user->id) }}" title="{{ $confession->user->name }}">
                    <div class="pull-left">
                        <img class="media-object img-thumbnail avatar avatar-middle" alt="{{ $confession->user->name }}" src="{{ $confession->user->avatar }}">
                    </div>
                    <div class="name pull-left">
                        <div>
                            {{ $confession->user->name }}
                        </div>
                        <div class="timeago">发表于 {{ $confession->created_at->diffForhumans() }}</div>
                    </div>
                    <div class="clear"></div>
                </a>

            </div>

            <p class="content">{{ $confession->content  }}</p>

            @if(count($confession->photos) )

                <div class="images-view">
                    <ul class="photos clearfix">

                        @foreach($confession->photos as $photo)
                            <li>
                                <img data-original="{{$photo->path }}" src="{{$photo->thumbnail_path }}" alt="{{ $photo->name }}">
                            </li>

                        @endforeach
                    </ul>
                </div>

            @endif

            {{--用户信息--}}
            <div class="user-info">


                @if($confession->user->school)
                    来自: &nbsp;<span>{{ $confession->user->school->name }}</span>&nbsp;

                    @if($confession->user->major)
                        <span>{{ $confession->user->major->academy->name }}</span>
                        <span>{{ $confession->user->major->name }}</span>
                    @endif

                    @if($confession->user->enrollment_year)
                        <span>{{ $confession->user->enrollment_year }}级</span>
                    @endif
                @else
                    该用户并没有填写学校信息
                @endif
            </div>


        </div>


        <p class="interactive">
            <a href="#">
                <span class="glyphicon glyphicon-heart-empty"
                      aria-hidden="true">
                </span> <span class="number">0</span>
            </a>

            <a href="#">
                <span class="glyphicon glyphicon-hand-right"
                      aria-hidden="true">
                </span> <span class="number">0</span>
            </a>

            <a href="#">
                <span class="glyphicon glyphicon-hand-down"
                      aria-hidden="true">
                </span> <span class="number">0</span>
            </a>

            <a href="#">
                <span class="glyphicon glyphicon-edit"
                      aria-hidden="true">
                </span> <span class="number">0</span>
            </a>

            <a href="#">
                <span class="glyphicon glyphicon-share"
                      aria-hidden="true">
            </a>

        </p>
    </div>
</div>