import apiConfig from '@/configs/apiConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface VehicleType {
  id: number
  nameVehicle: string
  imageVehicle: string
  weight: number
  cbm: number
  length: number
  width: number
  height: number
}

export const vehicleAPI = createApi({
  reducerPath: 'vehicleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.API_URL }),
  endpoints: build => ({
    getVehicles: build.query<VehicleType[], void>({
      query: () => '/vehicle',
    }),
  }),
})

export const { useGetVehiclesQuery } = vehicleAPI
