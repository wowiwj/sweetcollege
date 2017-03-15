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
    .publish-confessions{
        background-color: #F2FBF7;
        padding: 20px;


    }

    input{

        width: 1px;
        height: 1px;

    }

    .fileinput-button input{
        position:absolute;
        right: 0px;
        top:0px;
        opacity: 0;
        -ms-filter: 'alpha(opacity=0)';
        font-size: 1px;
    }

    .mgb10{

        margin-bottom: 10px;

    }

    .publish-confessions textarea{

        padding-bottom: 10px;
    }

    .pushbutton{

        background-color: #00b5ad;
        color: white;


    }


    .clear{
        clear: both;

    }

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{

            submit(){

                alert(eee);
            },

            upload(){

                var input = document.getElementById('files');

                var fileList = input.files;

                var url = window.URL || window.webkitURL;

                if (!url)
                {
                    alert("珍爱生命，远离IE浏览器");
                    return;

                }


                var imageUrl = url.createObjectURL(fileList[0]);

                var imgObjPreview=document.getElementById("preview");


                imgObjPreview.style.display = 'block';
                imgObjPreview.style.width = '300px';
                imgObjPreview.style.height = '120px';

                imgObjPreview.src = imageUrl;


                console.log(imageUrl);

                //console.log(fileList);

            },
            openFileInput(){

                $('#files').click();
                //alert(2);

            }

        }
    }
</script>
