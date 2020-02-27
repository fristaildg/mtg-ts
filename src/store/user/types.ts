export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const GET_LOGGED_USER = 'GET_LOGGED_USER'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

export interface Credentials {
  email: string
  password: string
}

export interface NewUserInfo extends Credentials {
  name: string
}

export interface UserState {
  success: boolean
  user: User | {}
}

export interface User {
  role: string
  _id: string
  name: string
  email: string
  createdAt: string
}

interface LoginAction {
  type: typeof LOGIN_REQUEST
  payload: {
    data: User
  }
}

interface GetLoggedUserAction {
  type: typeof GET_LOGGED_USER
  payload: {
    data: User
  }
}

interface LogoutAction { 
  type: typeof LOGOUT_REQUEST
  payload: never
}

export type UserActionTypes = LoginAction | GetLoggedUserAction | LogoutAction