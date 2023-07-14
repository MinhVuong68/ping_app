import { configureStore } from '@reduxjs/toolkit'
import otpSlice from './slices/otpSlice'
import userSlice from './user/userSlice'
import orderSlice from './slices/orderSlice'
import { useDispatch } from 'react-redux'
import orderBookingSlice from './booking/orderBookingSlice'
import { vehicleAPI } from '@/services/modules/vehicle'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
  reducer: {
    otp: otpSlice,
    user: userSlice,
    orderBooking: orderBookingSlice,
    order: orderSlice,
    [vehicleAPI.reducerPath]: vehicleAPI.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(vehicleAPI.middleware),
})

setupListeners(store.dispatch)

// get RootState and AppDitpatch from your store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
