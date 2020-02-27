import { sessionApiCall, apiCall } from '../../lib/apiCall'
import {
  Credentials,
  NewUserInfo,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  GET_LOGGED_USER
} from './types'
import {
  LOGIN,
  GET,
  REGISTER,
  PENDING,
  SUCCESS,
  REJECTED
} from '../../lib/apiCall.types'
import { removeUserToken } from '../../lib/userToken'
import { APP_ROOT } from '../../config/appConfig'
import  { asyncActionCreator } from '../asyncActionCreator'

export const login = (credentials: Credentials) => {
  return async (dispatch: any) => {
    dispatch(asyncActionCreator(LOGIN_REQUEST, PENDING))
    try {
      const newToken = await sessionApiCall(LOGIN, credentials)
      dispatch(asyncActionCreator(LOGIN_REQUEST, SUCCESS, newToken))
      dispatch(getLoggedUser(newToken))
    } catch (err) {
      dispatch(asyncActionCreator(LOGIN_REQUEST, REJECTED, err))
    }
  }
}

export const getLoggedUser = (newToken?: string) => {
  return async (dispatch: any) => {
    dispatch(asyncActionCreator(GET_LOGGED_USER, PENDING))
    try {
      const user = await apiCall('auth/loggedUser', GET, {}, newToken)
      dispatch(asyncActionCreator(GET_LOGGED_USER, SUCCESS, user))
    } catch (err) {
      dispatch(asyncActionCreator(GET_LOGGED_USER, REJECTED, err))
    }
  }
}

export const logout = () => {
  return (dispatch: any) => {
    dispatch({
      type: LOGOUT_REQUEST
    })
    removeUserToken()
    window.location.href = `${APP_ROOT}/`
  }
}

export const register = (newUserInfo: NewUserInfo) => {
  return async (dispatch: any) => {
    try {
      const newToken = await sessionApiCall(REGISTER, newUserInfo)
      dispatch(getLoggedUser(newToken))
      window.location.href = `${APP_ROOT}/dashboard`
    } catch (err) {
      console.log(err)
    }
  }
}