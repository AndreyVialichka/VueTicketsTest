<script setup>
import { useTicketListStore } from '~/stores/tikets'
import { storeToRefs } from 'pinia'


const store = useTicketListStore()

const { ticketList } = storeToRefs(store)

const { initFromLS } = store


onMounted(() =>  {
  initFromLS()
})

</script>

<template>
  <div v-for="ticket in ticketList" :key="ticket.id" class="item">
    <TicketItem :ticket="ticket" />
  </div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(226, 207, 244);
  border: 1px solid aquamarine;
  border-radius: 15px;
  width: 80%
}
.content {
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  justify-content: space-between;
  padding: 5px;
;
}
.completed {
  text-decoration: line-through;
}
</style>