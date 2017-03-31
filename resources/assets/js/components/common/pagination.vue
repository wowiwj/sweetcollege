<template>
    <div>

        <div class="text-center">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="disabled">
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li v-bind:class="(current==index + startPage) ? activeClass : ''"   @click="selectpage(index+startPage)"   v-for="(item,index) in perCount">
                        <a href="#">{{ index+ startPage}}</a>
                    </li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                perCount:5,
                current:1,
                activeClass: 'active',


            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed:{
            startPage:function() {

                if (this.current - Math.floor(this.perCount/2) > 0){

                    var startPage = this.current - Math.floor(this.perCount/2);

                     if (startPage + this.perCount > this.pageCount)
                    {
                        return this.pageCount - this.perCount + 1;
                    }


                    return startPage;

                }


                return 1;

            },
            endpage:function(){

                if (this.startPage + Math.floor(this.perCount/2) < this.pageCount){
                    return this.startPage + Math.floor(this.perCount/2);
                }

                return this.pageCount;

            }



        },

        props:['pageCount'],
        methods:{

            selectpage(index){

                if (this.current == index)
                {
                    return

                }
                this.current = index;
                this.$emit('changed',this.current)

            }


        }
    }
</script>
