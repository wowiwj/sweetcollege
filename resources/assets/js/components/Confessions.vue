<template>
    <div>
        <div v-for="confession in  confessions" class="confession-content">
            <div class="fh5co-property box">

                <div class="fh5co-property-innter ">

                    <div class="avatar-box">
                        <a :href="'users/'+confession.user.id" title="测试昵称">
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



                    <div class="images-view" v-show="confession.photos.data.length > 0">
                        <ul class="photos clearfix">



                            <li v-for="photo in confession.photos.data">
                                <a :href="photo.path" :data-fancybox="confession.id" :data-caption="confession.content">
                                    <img :src="photo.thumbnail_path" alt="" />
                                </a>
                                <!--<img data-original="photo.path" :src="photo.thumbnail_path" :alt="photo.name">-->
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

                <div class="comments" v-show="false">

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            评论
                            <button class="pull-right">排序方式</button>
                        </div>
                        <div class="panel-body">
                            Panel content
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <paginate v-on:changed="pageChanged" :page-count="pageCount"></paginate>


    </div>
</template>
<style scoped lang="scss">
    body{
        background-color:#ff0000;
    }
    .confession-content{

        margin-bottom: 5px;

    }

    .comments{
        padding: 20px;
        padding-top: 5px;
        .panel-default{
            .panel-heading{
                background-color: #FFFFFF;

            }



        }

    }

</style>
<script>

    import pagination from './common/pagination'

    export default{
        data(){
            return{
                msg:'hello vue',
                confessions:[],
                page:1,
                pageCount:0
            }
        },
        mounted(){

            axios.get('/api/v1/confessions')
                .then(response=>{
                    this.confessions = response.data.data;
                    this.pageCount = response.data.meta.pagination.total_pages;
                    console.log(this.pageCount);
                });

        },
        updated(){
            $("[data-fancybox]").fancybox({
                image : {
                    protect: true
                }
            });
        },
        methods:{
            loadpage(page){

                axios.get('/api/v1/confessions?page='+page)
                    .then(response=>{
                        this.confessions = [];
                        this.confessions = response.data.data;
                        console.log(this.confessions[1]);
                    });
            },
            pageChanged(page)
            {
                this.page = page;
                this.loadpage(page);
            }



        },
        components:{

            'paginate':pagination

        }
    }

</script>
