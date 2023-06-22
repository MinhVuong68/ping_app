import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./slices/otpSlice";
import userSlice from "./slices/userSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        otp: otpSlice,
        user: userSlice,
        order: orderSlice,
    }
})

export default store