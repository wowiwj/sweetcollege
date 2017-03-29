<template>
    <div class="publish-confessions box">

        <form action="/confessions" enctype="multipart/form-data" name = 'sayConfessions'>

            <textarea class="form-control mgb10" rows="3" placeholder="说你喜欢,成你所愿">

        </textarea>

            <span class="btn btn-success fileinput-button pull-left" @click="openFileInput">
            <span class="glyphicon glyphicon-camera"></span>
            <input @change="upload" type="file" id="files" >
        </span>

            <button class="btn btn-default pushbutton pull-right" @click="submit">立即发表</button>


            <img id="preview"  alt="">

            <div class="clear"></div>

        </form>

    </div>
</template>
<style scoped>

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{

        }
    }
</script>
