import { createReducer } from '@reduxjs/toolkit'
import { exampleAction } from './actions'

interface State {}

const initialState: State = {}

export default createReducer(initialState, builder =>
  builder.addCase(exampleAction, (state, { payload }) => {})
)
