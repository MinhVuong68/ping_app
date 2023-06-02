import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./slices/otpSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        otp: otpSlice,
        user: userSlice
    }
})

export default store