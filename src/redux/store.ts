import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./slices/otpSlice";

const store = configureStore({
    reducer: {
        otp: otpSlice
    }
})

export default store