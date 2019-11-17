<template>
  <div class="col-md-4 mx-auto">
    <h4>Posts List</h4>
    <span class="spinner-border" v-if="posts.length == 0 && isLoading"></span>
    <ul class="list-group" :v-if="posts">
      <li
        v-bind:key="post.id"
        v-bind:class="{'text-danger': !post.completed}"
        class="list-group-item"
        v-for="post in posts"
      >
        <router-link :to="{name: 'posts-deails', params: {id:post.id} }">{{post.title}}</router-link>
      </li>
      <button
        class="list-group-item list-group-item-action active"
        @click="loadPage"
        v-if="posts.length > 0"
      >
        <span class="spinner-border" v-if="isLoading"></span>
        Load More
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  data() {
    return {};
  },
  methods: {
    loadPage() {
      this.$store.dispatch("loadPosts");
    }
  },
  computed: {
    posts() {
      return this.$store.state.postsModule.postsList;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    const list = this.$store.state.postsModule.postsList;
    if (list.length == 0) {
      this.$store.dispatch("loadPosts");
    }
  }
};
</script>

<style>
</style>