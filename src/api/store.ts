import { configureStore } from '@reduxjs/toolkit'
import { JokesApi } from './JokesApi/JokesApi'
export const store = configureStore({
   reducer: {
      [JokesApi.reducerPath]: JokesApi.reducer,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(JokesApi.middleware),
})
