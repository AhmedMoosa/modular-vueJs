<template>
  <div class="col-md-4 mx-auto">
    <h4>Todos List</h4>
    <ul class="list-group" :v-if="todos">
      <li
        v-bind:key="todo.id"
        v-bind:class="{'text-danger': !todo.completed}"
        class="list-group-item"
        v-for="todo in todos"
      >
        <router-link :to="{name: 'todos-deails', params: {id:todo.id} }">{{todo.title}}</router-link>
      </li>
    </ul>
    <span class="spinner-border" v-if="todos.length == 0"></span>
  </div>
</template>

<script>
export default {
  name: "TodosList",
  data() {
    return {
      todos: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(r => r.json())
      .then(r => {
        this.todos = r;
      });
  }
};
</script>

<style>
</style>