<template>
  <div class="article-container">当前文章id为: {{ id }}</div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  asyncData({ params }) {
    const id = params.id;
    return {
      id,
    };
  },
};
</script>

<style>
</style>