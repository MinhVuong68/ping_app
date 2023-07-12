import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./slices/otpSlice";
import userSlice from "./user/userSlice";
import orderSlice from "./slices/orderSlice";
import { useDispatch } from "react-redux";
import orderBookingSlice from "./booking/orderBookingSlice";

const store = configureStore({
    reducer: {
        otp: otpSlice,
        user: userSlice,
        orderBooking: orderBookingSlice,
        order: orderSlice,
    }
})

// get RootState and AppDitpatch from your store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store