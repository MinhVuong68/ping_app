import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosClient from "../../configs/axiosClient"

const initialState = {
    id: '',
    name: '',
    phoneNumber: '',
    avatar: ''
}
interface AccoutLoginProps {
    phoneNumber: string,
    password: string
} 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state,action) {
            state.id = action.payload.id,
            state.name = action.payload.name,
            state.phoneNumber = action.payload.phoneNumber,
            state.avatar = action.payload.avatar
        },
        updateName(state,action){
            state.name = action.payload
        },
        updatePhoneNumber(state,action){
            state.phoneNumber = action.payload
        },
        updateAvatar(state,action){
            state.avatar = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state,action) => {
                state.id = action.payload.data.id,
                state.name = action.payload.data.name,
                state.phoneNumber = action.payload.data.phoneNumber,
                state.avatar = action.payload.data.avatar
            })
    }
})


export const login = createAsyncThunk("user/login",async (accountLogin: AccoutLoginProps) => {
    const userLogin = await axiosClient.post('/customer/login',accountLogin);
    console.log(userLogin);
    return userLogin;
})


export const { updateName,updatePhoneNumber,updateAvatar,setCurrentUser } = userSlice.actions
export default userSlice.reducer