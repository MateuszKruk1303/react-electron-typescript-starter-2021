import { createAction } from '@reduxjs/toolkit'
import { MODULE_NAME } from '../strings'

export const exampleAction = createAction<any>(
  `${MODULE_NAME}/userDisconnected`
)
