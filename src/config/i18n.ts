import i18next, { InitOptions } from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const DEFAULT_LANGUAGE = 'en'
export const DEFAULT_NAMESPACE = 'common'

const i18nOptions: InitOptions = {
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  defaultNS: DEFAULT_NAMESPACE,
  fallbackNS: DEFAULT_NAMESPACE,
  debug: true,
  // backend: {
  //   loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
  // },
}

const i18n = {
  init: () => i18next.use(Backend).use(initReactI18next).init(i18nOptions),
}

export default i18n
