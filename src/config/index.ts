export { default as env } from './env'
export { default as i18n } from './i18n'
export { default as theme } from './theme'
export { default as paths } from './paths'

const throwError = (message: string) => {
  throw new Error(message)
}

const config = {
  accessTokenKey: 'leafeeAccessToken',
  refreshTokenKey: 'leafeeRefreshToken',
  errorNamespace: 'errors',
  apiUrl:
    process.env.REACT_APP_API_URL ||
    throwError('Missing API_URL env variable.'),
}

export default config
