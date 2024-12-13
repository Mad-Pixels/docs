import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n'
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    currentLocale: DEFAULT_LOCALE
  }),
  
  actions: {
    setLocale(locale) {
      if (SUPPORTED_LOCALES.includes(locale)) {
        this.currentLocale = locale
        localStorage.setItem('locale', locale)
      }
    },
    
    getInitialLocale() {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
        return savedLocale
      }
      const urlLocale = window.location.pathname.split('/')[1]
      if (urlLocale && SUPPORTED_LOCALES.includes(urlLocale)) {
        return urlLocale
      }
      const browserLocale = navigator.language.split('-')[0]
      if (SUPPORTED_LOCALES.includes(browserLocale)) {
        return browserLocale
      }
      return DEFAULT_LOCALE
    },

    initLocale() {
      const locale = this.getInitialLocale()
      this.setLocale(locale)
      return locale
    }
  }
})