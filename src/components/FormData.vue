<template>
<div>

    用FormDate上传
    <input ref='fileInput' type="file" />
    <input type="button" value="上传" @click="handleUpload" />
</div>
    
</template>
<script>
export default {
    methods:{
        handleUpload(){
            const formData = new FormData();
            formData.append('uploadFile', this.$refs.fileInput.files[0]);
            const xhr = new XMLHttpRequest();
            xhr.open('POST','http://localhost:3000', true);
            xhr.send(formData);
        }
    }
}
</script>