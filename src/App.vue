<template>
  <div>
    <h1>文件上传</h1>
    <ul>
      <li>
        <router-link to="/Form">Form</router-link>
      </li>
      <li>
        <router-link to="/FormData">FormData</router-link>
      </li>
      <li>
        <router-link to="/Blob">Blob</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "上传"
    };
  }
};
</script>