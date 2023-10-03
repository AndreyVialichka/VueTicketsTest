import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }) {
      this.loading = true;
      if (username == 'admin' && password == 'admin') {
        this.authenticated = true; 
      }
      this.loading = false;
    },
    logUserOut() {
      this.authenticated = false; 
    },
  },
});