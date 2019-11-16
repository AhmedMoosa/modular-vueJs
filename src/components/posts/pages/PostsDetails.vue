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
    return {
      post: null
    };
  },
  created() {
    const id = this.$route.params["id"];
    if (id) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + id + "?_limit=5")
        .then(r => r.json())
        .then(r => {
          this.post = r;
        });
    }
  }
};
</script>

<style>
</style>