<div class="confession-content">
    <div class="fh5co-property">

        <div class="fh5co-property-innter ">
            <h3><a href="#">{{ $confession->content  }}</a></h3>
            <div class="price-status">
                头像 学校
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>

            @if(count($confession->photos) )

                <div style="padding: 10px">

                        @foreach($confession->photos as $photo)

                            <img width="30%" src="{{ url('/'.$photo->thumbnail_path) }}" alt="{{ $photo->name }}" class="img-responsive1">

                        @endforeach

                </div>

            @endif
        </div>


        <p class="fh5co-property-specification">
            <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  <span><strong>2</strong> Garages</span>
        </p>
    </div>
</div>