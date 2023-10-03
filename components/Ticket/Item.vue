<script setup>
import { useTicketListStore } from '~/stores/tikets'

const props = defineProps({
  ticket: Object,
  require: true
})

const store = useTicketListStore()

const { toggleCompleted, deleteTicket } = store

const toggleShow = ref(false)

</script>

<template>
    <div class="content" @click="toggleShow = !toggleShow">
      <span :class="{ completed: ticket.completed }">{{ ticket.item }}</span>
      <div v-if="toggleShow">
        <span @click.stop="toggleCompleted(ticket.id)">&#10004;</span>
        <span @click="deleteTicket(ticket.id)" class="x">&#10060;</span>
      </div>
  </div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
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