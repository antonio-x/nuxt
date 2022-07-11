<template>
  <div class="error-container">
    <p>错误码：{{ error.statusCode }}</p>
    <p>错误路径：{{ error.path }}</p>
    <p>错误消息：{{ error.message }}</p>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style scoped>
.error-container {
  height: 80vh;
  padding-top: 20vh;
}
.error-container p {
  text-align: center;
  color: rgb(168, 34, 34);
}
.error-container a {
  display: block;
  margin: 20px auto;
  font-size: 18px;
  text-align: center;
}
</style>