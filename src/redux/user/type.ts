export interface UserLoginPayload {
  phoneNumber: string
  password: string
}

export interface UserSignupPayload {
  name: string
  phoneNumber: string
}

export interface UserChangePasswordPayload {
  id: number | null
  oldPassword: string
  newPassword: string
}

export interface CurrentUserType {
  id: number | null
  name: string
  phoneNumber: string
  phoneContact: string
  avatar: string
}
