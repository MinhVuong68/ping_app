import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import apiConfig from '@/configs/apiConfig'
import { serialize } from '@/utils/api'

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.API_URL }),
  endpoints: builder => ({
    getOrderByStatusAndCustomerId: builder.query<any, { [x: string]: any }>({
      query: params => `/order/orders/${serialize(params)}`,
    }),
  }),
})

export const { useGetOrderByStatusAndCustomerIdQuery } = orderAPI
