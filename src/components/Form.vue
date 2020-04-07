<template>
<div>
    用form上传
    <form ref="form" action="http://localhost:3000/" method="post" enctype="multipart/form-data" target="iframe">
        <input name="uploadFile" type="file" accept="image/png, image/jpeg" />
        <input type="button" value="提交" @click="handleSubmit" />
    </form>
    <iframe name="iframe" style="display:none"></iframe>
</div>
    
</template>
<script>
export default {
    methods:{
        handleSubmit(){
            this.$refs.form.submit();
        }
    }
}
</script>