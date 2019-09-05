import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const currentLang = localStorage.getItem('lang')

const numberFormats = {
  'en': {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  },
  'pt-br': {
    currency: {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'symbol'
    }
  }
}

function loadLocaleMessages () {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })

  return messages
}

export default new VueI18n({
  numberFormats,
  locale: currentLang || 'en',
  fallbackLocale: currentLang || 'en',
  messages: loadLocaleMessages()
})
