import { createSlice } from "@reduxjs/toolkit"
import { create } from "react-test-renderer"

const initialState = {
    name: '',
    phoneNumber: '',
    avatar: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state,action){
            state.name = action.payload
        },
        updatePhoneNumber(state,action){
            state.phoneNumber = action.payload
        },
        updateAvatar(state,action){
            state.avatar = action.payload
        }
    }
})

export const { updateName,updatePhoneNumber,updateAvatar } = userSlice.actions
export default userSlice.reducer