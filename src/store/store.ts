import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './produtosSlice'

const store = configureStore({
  reducer: {
    produtos: produtosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
