<template>
    <div>
        <div v-for="confession in  confessions" class="confession-content">
            <div class="fh5co-property box">

                <div class="fh5co-property-innter ">

                    <div class="avatar-box">
                        <a href="#" title="测试昵称">
                            <div class="pull-left">
                                <img class="media-object img-thumbnail avatar avatar-middle" :alt="confession.user.name" :src="confession.user.avatar">
                            </div>
                            <div class="name pull-left">
                                <div>
                                    {{ confession.user.name }}
                                </div>
                                <div class="timeago">发表于 {{ confession.created_at }}</div>
                            </div>
                            <div class="clear"></div>
                        </a>

                    </div>

                    <p class="content">{{ confession.content }}</p>


                    <div class="images-view">
                        <ul class="photos clearfix">

                            <li v-for="photo in confession.photos.data">
                                <img data-original="photo.path" :src="photo.thumbnail_path" :alt="photo.name">
                            </li>

                        </ul>
                    </div>

                    <div class="user-info">
                        该用户并没有填写学校信息

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
                        </span>
                    </a>

                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue',
                confessions:[]
            }
        },
        mounted(){

            axios.get('/api/v1/confessions')
                .then(response=>{
                    this.confessions = response.data.data;
                    console.log(this.confessions[1]);



                });


        }
    }

</script>
