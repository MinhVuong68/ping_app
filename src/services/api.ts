import axiosClient from '@/configs/axiosClient'
import {
  CurrentUserType,
  UserLoginPayload,
  UserSignupPayload,
} from '@/redux/user/type'

const userAPI = {
  signup: (payload: UserSignupPayload) =>
    axiosClient.post('/customer/register', payload),
  login: (payload: UserLoginPayload) =>
    axiosClient.post('/customer/login', payload),

  updateProfile: (payload: Omit<CurrentUserType, 'phoneNumber'>) =>
    axiosClient.post(`/customer/${payload.id}`),
}

export default userAPI
