<template>
    <div>
        <div class="form-group">
            <label for="" class="col-sm-2 control-label">城市</label>
            <div class="col-sm-6">
                <select name="city" class="form-control">
                    <option selected = 'selected'>扬州市</option>
                    <option>扬州市</option>
                    <option>南京市</option>
                    <option>浙江市</option>
                    <option>上海市</option>
                </select>
            </div>
            <div class="col-sm-4 help-block">
                如:扬州市,没有的话回车添加
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
                msg:'hello vue'
            }
        },
        mounted(){

        },
        components:{

        }
    }
</script>
