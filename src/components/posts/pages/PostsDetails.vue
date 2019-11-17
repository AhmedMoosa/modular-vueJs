<template>
  <div>
    <h4>Post Details</h4>
    <div v-if="post">
      <p>
        <strong>Title</strong>
        {{ post.title}}
      </p>
      <strong>Body :</strong>
      <div v-html="post.body"></div>
    </div>
    <span class="spinner-border" v-if="!post"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    post() {
      const id = this.$route.params["id"];
      return this.$store.getters.getPostById(id);
    }
  },
  created() {}
};
</script>

<style>
</style>