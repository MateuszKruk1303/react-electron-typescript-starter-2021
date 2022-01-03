import { ModuleRoute } from 'shared/types'

import auth from './auth'
import home from './home'

export const reducers = {
  [auth.name]: auth.reducer,
  [home.name]: home.reducer,
}

export const routes: ModuleRoute[] = [
  // add routes below
  ...auth.routes,
  ...home.routes,
]
