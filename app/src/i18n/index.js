import { createI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './config'
import us from './locales/us.json'
import ru from './locales/ru.json'

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    us,
    ru
  }
})

export { SUPPORTED_LOCALES, DEFAULT_LOCALE }