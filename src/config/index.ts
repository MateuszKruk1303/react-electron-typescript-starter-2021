export { default as env } from './env'
export { default as theme } from './theme'
export { default as paths } from './paths'

const throwError = (message: string) => {
  throw new Error(message)
}

const config = {
  accessTokenKey: 'accessToken',
  errorNamespace: 'errors',
  defaultLanguage: 'en',
  languageNamespaces: ['auth', 'common', 'home'],
  languages: ['en', 'pl'],
  defaultNamespace: 'common',
  apiUrl:
    process.env.REACT_APP_API_URL ||
    throwError('Missing API_URL env variable.'),
}

export default config
