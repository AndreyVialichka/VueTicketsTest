<script setup>

</script>

<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <TicketForm />
    <TicketList />
  </div>
</template>

<style scoped>
.todo-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  min-height: 95vh;
  width: 30vw;
  border: 1px solid aquamarine;
  border-radius: 15px;

}
</style>