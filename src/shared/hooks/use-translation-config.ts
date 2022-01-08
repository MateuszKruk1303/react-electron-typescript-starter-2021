import { useEffect, useState } from 'react'
import config from 'config'
import Translation from 'locales/Translation'

export const useTrasnlationConfig = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const initialLanguage = Translation.getLanguage() || config.defaultLanguage
  const [_, setLanguage] = useState(initialLanguage)

  const handleSetLanguage = (lng: string) => {
    setLanguage(lng)
    Translation.setLanguage(lng)
  }

  useEffect(() => {
    ;(async () => {
      await Translation.initialize(
        config.languageNamespaces,
        config.languages,
        Translation.getLanguage() || config.defaultLanguage
      )
      setIsInitialized(true)
    })()
  }, [])

  return { handleSetLanguage, isInitialized }
}
