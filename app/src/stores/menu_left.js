import { defineStore } from 'pinia'

export const useLeftMenuStore = defineStore('menu_left', {
  state: () => ({
    isOpen: false,
    isMobile: false
  }),
  
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
    },
    set(isMobile) {
      this.isMobile = isMobile
      if (!isMobile) {
        this.isOpen = false
      }
    }
  }
})