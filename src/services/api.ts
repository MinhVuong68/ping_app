import axiosClient from '@/configs/axiosClient'
import {
  CurrentUserType,
  UserChangePasswordPayload,
  UserLoginPayload,
  UserSignupPayload,
} from '@/redux/user/type'
import { serialize } from '@/utils/api'

export const userAPI = {
  signup: (payload: UserSignupPayload): any =>
    axiosClient.post('/customer/register', payload),
  login: (payload: UserLoginPayload): any =>
    axiosClient.post('/customer/login', payload),
  updateProfile: (payload: Omit<CurrentUserType, 'phoneNumber'>): any =>
    axiosClient.put(`/customer/${payload.id}`),
  changePassword: (payload: UserChangePasswordPayload): any =>
    axiosClient.post('/customer/change-password', payload),
  getPlaceSaved: (payload: number | null) =>
    axiosClient.get(`/place-saved/${payload}`),
}

export const vehicleAPI = {
  getAll: (): any => axiosClient.get('/vehicle'),
}

export const driverAPI = {
  getAllReady: (payload: number | null) =>
    axiosClient.get(`/driver/online/${payload}`),
}

export const discountAPI = {
  getDiscountByCode: (payload: string) =>
    axiosClient.get(`/discount/${payload}`),
}

export const orderAPI = {
  getOrderByStatus: (payload: any) =>
    axiosClient.get(`/order/orders${serialize(payload)}`),
  requireOrderBooking: (payload: any) => {
    axiosClient.post('/order', payload)
  },
}
