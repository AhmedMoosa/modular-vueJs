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
    };
  },
  computed:{
    todo(){
      const id = this.$route.params["id"];
      return this.$store.getters.getTodoById(id);
    }
  }
  ,
  created() {
    
  }
};
</script>

<style>
</style>