import { defineStore } from 'pinia'
import nuxtStorage from 'nuxt-storage';

export const useTicketListStore = defineStore('ticketList', {
  state: () => ({
    ticketList: [],
    id: 0
  }),
  actions: {
    addTicket(item) {
      let id = this.ticketList.length + 1
      const ticketListItem = { item, id: id, completed: false }
      this.ticketList.push( ticketListItem )
      nuxtStorage.localStorage.setData(ticketListItem.id, JSON.stringify(ticketListItem));

    },


    deleteTicket(itemId) {
      this.ticketList = this.ticketList.filter((object) => {
        return object.id !== itemId
      })
      nuxtStorage.localStorage.removeItem(itemId);
    },


    toggleCompleted(idToFind) {
      nuxtStorage.localStorage.removeItem(idToFind);
      const todo = this.ticketList.find((obj) => obj.id === idToFind)
      if (todo) {
        todo.completed = !todo.completed
        nuxtStorage.localStorage.setData(idToFind, JSON.stringify(todo));

      }
    },


    initFromLS() {
      if(this.ticketList.length > 0) return
      const localStorageSize = window.localStorage.length
        for (let i = 0; i < localStorageSize; i++) {
          let item = JSON.parse(window.localStorage.getItem(localStorage.key(i))).value
          if(item) this.ticketList.push(JSON.parse(item))
        }
    }
  }
})