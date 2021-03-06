import {
  POST,
  PUT,
  GET,
  Method,
  Session,
  Body,
  Config,
  LOGIN,
  REGISTER,
  MtgQueryObj,
} from "./apiCall.types"
import { setUserToken } from "./userToken"
import { API_ROOT, MTG_SRC_ROOT } from "../config/appConfig"
import _ from "lodash"

export const apiCall = async (
  endpoint: RequestInfo,
  method: Method,
  body?: Body,
  newToken?: string
) => {
  let token

  if (!newToken) {
    token = localStorage.getItem("userToken")
  } else {
    token = newToken
  }

  const headers = new Headers()
  headers.set("Content-Type", "application/json")
  headers.set("Authorization", `Bearer ${token}`)

  const config: Config = {
    method,
    headers,
  }

  if (method === POST || method === PUT) {
    config.body = JSON.stringify(body)
  }

  if (method === GET && !!body) {
    const queryString = Object.keys(body)
      .map(key => `${key}=${body[key]}`)
      .join('&')
    endpoint = `${endpoint}?${queryString}`
  }

  const response = await fetch(`${API_ROOT}/${endpoint}`, config)

  return await response.json()
}

export const sessionApiCall = async (
  sessionType: Session,
  credentials: Body
) => {
  try {
    let endpoint = ""

    if (sessionType === LOGIN) {
      endpoint = "auth/login"
    } else if (sessionType === REGISTER) {
      endpoint = "auth/register"
    }

    const response = await apiCall(endpoint, POST, credentials)

    setUserToken(response.token)
    return response.token
  } catch (error) {
    console.log(error)
  }
}

export const mtgApiCall = async (
  endpoint: RequestInfo,
  queryObj?: MtgQueryObj,
  page?: number
) => {
  try {
    let response: Response
    if (queryObj && !_.isEmpty(queryObj)) {
      if (queryObj.name) {
        response = await fetch(
          `${MTG_SRC_ROOT}/${endpoint}/search?q=${queryObj.name}&order=cmc&page=${page ||
          1}`
        )
      } else {
        const queryString = Object.keys(queryObj)
          .filter(key => key !== 'name' && key !== 'page')
          .map((key) => `${key}:${queryObj[key]}`)
          .join("+")
        response = await fetch(
          `${MTG_SRC_ROOT}/${endpoint}/search?q=${queryString}&order=cmc&page=${page ||
          1}`
        )
      }
    } else {
      response = await fetch(`${MTG_SRC_ROOT}/${endpoint}`)
    }

    return await response.json()
  } catch (err) {
    return {
      err,
      message: 'there was an error while fetching the cards'
    }
  }
}
