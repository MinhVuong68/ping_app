import { createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'

import { OrderBookingType } from './type'
import { discountAPI, driverAPI, vehicleAPI } from '@/services/api'

interface InitialState {
  orderBooking: OrderBookingType
}

const initialState: InitialState = {
  orderBooking: {
    customerId: '',
    nameSender: '',
    phoneSender: '',
    locationSender: {
      address: '',
      coordinate: {
        latitude: null,
        longitude: null,
      },
    },
    nameReceiver: '',
    phoneReceiver: '',
    locationReceiver: {
      address: '',
      coordinate: {
        latitude: null,
        longitude: null,
      },
    },
    vehicle: {
      vehicleId: null,
      vehicleName: '',
      weight: null,
    },
    note: '',
    rollBack: false,
    discount: {
      discountId: null,
      discountCode: '',
      discountPercentage: 0,
      discountMoney: 0,
    },
    price: 0,
    driverId: null,
    totalPrice: 0,
    isWho: 'sender',
  },
}

const orderBookingSlice = createSlice({
  name: 'orderBooking',
  initialState: initialState,
  reducers: {
    setInfoOrder(state, action) {
      state.orderBooking = { ...state.orderBooking, ...action.payload }
    },
    setIsWho(state, action) {
      state.orderBooking.isWho = action.payload.isWho
    },
    setLocationSender(state, action) {
      ;(state.orderBooking.locationSender.address = action.payload.address),
        (state.orderBooking.locationSender.coordinate.latitude =
          action.payload.latitude),
        (state.orderBooking.locationSender.coordinate.longitude =
          action.payload.longitude)
    },
    setLocationReceiver(state, action) {
      ;(state.orderBooking.locationReceiver.address = action.payload.address),
        (state.orderBooking.locationReceiver.coordinate.latitude =
          action.payload.latitude),
        (state.orderBooking.locationReceiver.coordinate.longitude =
          action.payload.longitude)
    },
    setVehicle(state, action) {
      state.orderBooking.vehicle = { ...action.payload }
    },
    setAdditionalOrderBooking(state, action) {
      ;(state.orderBooking.note = action.payload.note),
        (state.orderBooking.discount.discountCode =
          action.payload.discountCode),
        (state.orderBooking.discount.discountId = action.payload.discountId),
        (state.orderBooking.discount.discountPercentage =
          action.payload.discountPercentage),
        (state.orderBooking.rollBack = action.payload.rollBack)
    },
    setDriver(state, action) {
      state.orderBooking = { ...state.orderBooking, ...action.payload }
    },
    setPrice(state, action) {
      state.orderBooking = { ...state.orderBooking, ...action.payload }
    },
    setTotalPrice(state, action) {
      state.orderBooking.totalPrice = action.payload.totalPrice
    },
  },
})

export const getAllVehicle = createAsyncThunk(
  'vehicle/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await vehicleAPI.getAll()
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const getAllDriverReady = createAsyncThunk(
  'driver/getAllready',
  async (vehicleId: number | null, thunkAPI) => {
    try {
      const res = driverAPI.getAllReady(vehicleId)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const getDiscountByCode = createAsyncThunk(
  'discount/getDiscountByCode',
  async (discountCode: string,thunkAPI) => {
    try {
      const res = await discountAPI.getDiscountByCode(discountCode)
      return res
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const {
  setInfoOrder,
  setIsWho,
  setLocationReceiver,
  setLocationSender,
  setVehicle,
  setAdditionalOrderBooking,
  setDriver,
  setPrice,
  setTotalPrice,
} = orderBookingSlice.actions
export default orderBookingSlice.reducer
