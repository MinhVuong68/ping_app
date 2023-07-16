import apiConfig from '@/configs/apiConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const placedSavedAPI = createApi({
  reducerPath: 'placeSavedAPI',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.API_URL }),
  endpoints: builder => ({
    getAllPlaceSavedByCustomerId: builder.query<any, number | null>({
      query: id => `/place-saved/${id}`,
    }),
  }),
})

export const { useGetAllPlaceSavedByCustomerIdQuery } = placedSavedAPI
