import config from 'config'
import Translation from '../../locales/Translation'

export const useTranslation = (ns: string = config.defaultNamespace) => {
  const t = (key: string, namespace?: string): any => {
    const file = Translation.getFile(namespace ? namespace : ns)
    if (typeof file === 'string') return ''
    const result = key
      .split('.')
      .reduce((obj, property) => (obj ? obj[property] : {}), file ? file : {})

    if (namespace && namespace === config.defaultNamespace && !result)
      return key

    return result && Object.keys(result).length
      ? result
      : t(key, config.defaultNamespace)
  }

  return { t }
}
