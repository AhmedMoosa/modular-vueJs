<template>
  <div class="col-md-4 mx-auto">
    <h4>Todos List</h4>
    <span class="spinner-border" v-if="todos.length == 0 && isLoading"></span>
    <ul class="list-group" :v-if="todos">
      <li
        v-bind:key="todo.id"
        v-bind:class="{'text-danger': !todo.completed}"
        class="list-group-item"
        v-for="todo in todos"
      >
        <router-link :to="{name: 'todos-deails', params: {id:todo.id} }">{{todo.title}}</router-link>
      </li>
      <button
        class="list-group-item list-group-item-action active"
        @click="loadPage"
        v-if="todos.length > 0"
      >
        <span class="spinner-border" v-if="isLoading"></span>
        Load More
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodosList",
  data() {
    return {};
  },
  methods: {
    loadPage() {
      this.$store.dispatch("loadTodos");
    }
  },
  computed: {
    todos() {
      return this.$store.state.todosModule.todosList || [];
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    const list = this.$store.state.todosModule.todosList || [];
    if (list.length == 0) {
      this.$store.dispatch("loadTodos");
    }
  }
};
</script>

<style>
</style>