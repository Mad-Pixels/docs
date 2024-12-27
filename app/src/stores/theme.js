import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkTheme: localStorage.getItem('theme') === 'dark'
  }),
  actions: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light')
    },
    initTheme() {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.isDarkTheme = savedTheme ? savedTheme === 'dark' : prefersDark
      
      document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light')
    }
  }
})