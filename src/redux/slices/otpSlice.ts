import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    otp: '',
}

const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        updateOTP(state,action) {
            state.otp = action.payload
        }
    }
})

export const { updateOTP } = otpSlice.actions

export default otpSlice.reducer