import {
  POST,
  PUT,
  Method,
  Session,
  Body,
  Config,
  LOGIN,
  REGISTER,
  MtgQueryObj
} from './apiCall.types'
import {
  setUserToken
 } from './userToken'
 import { API_ROOT, MTG_SRC_ROOT } from '../config/appConfig'

export const apiCall = async (endpoint: RequestInfo, method: Method, body?: Body, newToken?: string) => {
  let token

  if (!newToken) {
    token = localStorage.getItem('userToken')
  } else {
    token = newToken
  }

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', `Bearer ${token}`)

  const config: Config = {
    method,
    headers
  }

  if (method === POST || method === PUT) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(
    `${API_ROOT}/${endpoint}`,
    config
  )

  return await response.json()
}

export const sessionApiCall = async (sessionType: Session, credentials: Body) => {
  try {
    let endpoint = ''
    
    if (sessionType === LOGIN) {
      endpoint = 'auth/login'
    } else if (sessionType === REGISTER) {
      endpoint = 'auth/register'
    }

    const response = await apiCall(endpoint, POST, credentials)

    setUserToken(response.token)
    return response.token
  } catch (error) {
    console.log(error)
  }
}

export const mtgApiCall = async (endpoint: RequestInfo, queryObj?: MtgQueryObj) => {
  try {
    const response = await fetch(`${MTG_SRC_ROOT}/${endpoint}`)

    return await response.json()
  } catch (err) {
    console.log(err)
  }
}