<template>
  <div>
    <h4>Todo Details</h4>
    <div v-if="todo">
      <p><strong>Title</strong> {{ todo.title}}</p>
      <p><strong>Is Completed :</strong> {{ todo.completed}}</p>
    </div>
    <span class="spinner-border" v-if="!todo"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: null
    };
  },
  created() {
    const id = this.$route.params["id"];
    if (id) {
      fetch("https://jsonplaceholder.typicode.com/todos/" + id + "?_limit=5")
        .then(r => r.json())
        .then(r => {
          this.todo = r;
        });
    }
  }
};
</script>

<style>
</style>