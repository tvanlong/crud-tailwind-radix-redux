import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Login, LoginRequest } from 'src/types/login.type'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (build) => ({
    login: build.mutation<Login, LoginRequest>({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginMutation } = loginApi
