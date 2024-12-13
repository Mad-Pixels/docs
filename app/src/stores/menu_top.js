import { defineStore } from 'pinia'

export const useTopMenuStore = defineStore('menu_top', {
  state: () => ({
    isMobileMenuOpen: false,
    isMobile: false 
  }),
  
  actions: {
    toggle() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    close() {
      this.isMobileMenuOpen = false
    },
    set(isMobile) {
      this.isMobile = isMobile
      if (!isMobile) {
        this.isMobileMenuOpen = false
      }
    }
  }
})