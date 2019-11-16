<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link> |
      <router-link to="/todos">Todos</router-link> |
      <router-link to="/posts">Posts</router-link>
    </div>
    <AppRouterView></AppRouterView>
  </div>
</template>
<script>
import AppRouterView from "./components/AppRouterView.vue";
export default {
  name: "App",
  components: { AppRouterView }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
