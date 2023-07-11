import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosClient from '../../configs/axiosClient'
import { CurrentUserType, UserLoginPayload, UserSignupPayload } from './type'
import userAPI from '@/services/api'
import { AxiosResponse } from 'axios'

const initialState = {
  currentUser: {
    id: '',
    name: '',
    phoneNumber: '',
    phoneContact: '',
    avatar: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.currentUser.name = action.payload
    },
    updatePhoneNumber(state, action) {
      state.currentUser.phoneNumber = action.payload
    },
    updateAvatar(state, action) {
      state.currentUser.avatar = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.currentUser = {
          ...action.payload,
          phoneNumber: state.currentUser.phoneNumber,
        }
      })
  },
})

export const signup = createAsyncThunk(
  'user/signup',
  async (userSignup: UserSignupPayload, thunkAPI) => {
    try {
      const res: CurrentUserType = await axiosClient.post(
        '/customer/register',
        userSignup,
      )
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const login = createAsyncThunk(
  'user/login',
  async (accountLogin: UserLoginPayload, thunkAPI) => {
    try {
      const res: any = await userAPI.login(accountLogin)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (userUpdate: Omit<CurrentUserType, 'phoneNumber'>, thunkAPI) => {
    try {
      const res: Omit<CurrentUserType, 'phoneNumber'> = await axiosClient.put(
        `/customer/${userUpdate.id}`,
        {
          name: userUpdate.name,
          avatar: userUpdate.avatar,
          phoneContact: userUpdate.phoneContact,
        },
      )
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const { updateName, updatePhoneNumber, updateAvatar } = userSlice.actions
export default userSlice.reducer
