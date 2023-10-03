<script setup>
import { ref } from 'vue'
import { useTicketListStore } from '~/stores/tikets'

const ticket = ref('')

const store = useTicketListStore()

function addItemAndClear(item) {
  if (item.length === 0) {
    return
  }
  store.addTicket(item)
  ticket.value = ''
}

</script>

<template>
  <div class="form-wrapper">
    <form @submit.prevent="addItemAndClear(ticket)">
      <input v-model="ticket" type="text"  />
      <button>Add</button>
    </form>
  </div>
</template>

<style scoped>
.form-wrapper{
  display: flex;
  justify-content: center;
  border: 1px solid aquamarine;
  border-radius: 15px;
  gap: 10px;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
input {
  height: 20px;
  width: 50%;
  padding: 15px;
  border: 1px solid aquamarine;
  border-radius: 10px;
  outline: none;
}
button {
  
  background-color: aquamarine;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color: white;
  padding: 5px;
  width: 100px;
}
.alert-div {
  min-height: 25px;
}
.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>