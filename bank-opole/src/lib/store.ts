import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'



export const makeStore = configureStore({
    reducer: { counterReducer },
})


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore.getState>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore['getState']>
export type AppDispatch = typeof makeStore['dispatch']
