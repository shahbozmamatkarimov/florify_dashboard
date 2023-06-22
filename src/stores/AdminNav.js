import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAdminNavbar = defineStore('toggleNav', () => {
  const toggleNav = ref(false);

  return { toggleNav }
})
