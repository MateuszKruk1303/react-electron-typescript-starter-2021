import config from 'config'

class Translation {
  static files: Map<string, any> = new Map()
  static localStorageLanguageKey = 'language'
  static isInitialized = false

  static async initialize(
    namespaces: string[],
    languages: string[],
    language: string
  ) {
    this.setLanguage(language)
    for (const lng of languages) {
      for (const ns of namespaces) {
        this.files.set(
          `./${lng}/${ns}.json`,
          await require(`./${lng}/${ns}.json`)
        )
      }
    }
    this.isInitialized = true
  }

  static getFile(namespace: string) {
    if (!this.isInitialized) return ''
    const language = this.getLanguage()
    if (!language) this.setLanguage(config.defaultLanguage)
    const file = this.files.get(`./${language}/${namespace}.json`)
    return file
  }

  static setLanguage(language: string) {
    return localStorage.setItem(this.localStorageLanguageKey, language)
  }

  static getLanguage() {
    return localStorage.getItem(this.localStorageLanguageKey)
  }
}

export default Translation
