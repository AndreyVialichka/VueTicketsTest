import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());

  if (authenticated.value && to?.name === 'login') {
    return navigateTo('/');
  }

  if (!authenticated.value && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }
});