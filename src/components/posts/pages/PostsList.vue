<template>
  <div class="col-md-4 mx-auto">
    <h4>Posts List</h4>
    <ul class="list-group" :v-if="posts">
      <li
        v-bind:key="post.id"
        v-bind:class="{'text-danger': !post.completed}"
        class="list-group-item"
        v-for="post in posts"
      >
        <router-link :to="{name: 'posts-deails', params: {id:post.id} }">{{post.title}}</router-link>
      </li>
    </ul>
    <span class="spinner-border" v-if="posts.length == 0"></span>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  data() {
    return {
      posts: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(r => r.json())
      .then(r => {
        this.posts = r;
      });
  }
};
</script>

<style>
</style>