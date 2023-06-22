import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavbar = defineStore('toggle', () => {
  const toggle = ref(false);

  return { toggle }
})