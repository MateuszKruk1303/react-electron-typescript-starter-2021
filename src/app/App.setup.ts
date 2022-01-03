import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  AnyAction,
  Reducer,
} from '@reduxjs/toolkit'
import { reducers } from 'modules'
import { actions, reducer as common } from 'shared/store'
import packageJson from '../../package.json'

// Routes
export { routes } from 'modules'

// Store
const appReducer = combineReducers({
  app: () => ({ version: packageJson.version }),
  common,
  ...reducers,
})

export type RootState = ReturnType<typeof appReducer>

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === actions.root.clearState.type) {
    localStorage.removeItem('persist:root')
    state = {} as RootState
  }

  return appReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
