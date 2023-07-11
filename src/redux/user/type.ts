export interface UserLoginPayload {
  phoneNumber: string
  password: string
}

export interface UserSignupPayload {
  name: string,
  phoneNumber: string,
}

export interface CurrentUserType {
  id: string
  name: string
  phoneNumber: string
  phoneContact: string
  avatar: string
}

