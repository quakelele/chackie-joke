import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { JokeType } from '../_types'

export const JokesApi = createApi({
   reducerPath: 'JokesApi',
   tagTypes: ['Jokes'],
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.chucknorris.io/' }),
   endpoints: build => ({

      getRandomJoke: build.query<JokeType, void>({
         query: () => {
            return {
               url: 'jokes/random',
            }
         },

         providesTags: [{ type: 'Jokes', id: 'LIST' }],
      }),
   
   }),
})

export const { 
   useGetRandomJokeQuery,
   useLazyGetRandomJokeQuery } = JokesApi
