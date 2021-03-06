import { FETCH_CARDS, Filter, SET_FILTER, SET_PAGE } from "./types"

import { asyncActionCreator } from "../asyncActionCreator"
import {
  SUCCESS,
  PENDING,
  REJECTED,
  MtgQueryObj
} from "../../lib/apiCall.types"
import { mtgApiCall } from "../../lib/apiCall"

export const fetchCards = (queryObj: MtgQueryObj, page?: number) => {
  return async (dispatch: any) => {
    dispatch(asyncActionCreator(FETCH_CARDS, PENDING))
    const response = await mtgApiCall("cards", queryObj, page)
    if (response.data) {
      dispatch(asyncActionCreator(FETCH_CARDS, SUCCESS, response))
    } else {
      dispatch(asyncActionCreator(FETCH_CARDS, REJECTED, response))
    }
  }
}

export const setFilter = (filter: Filter | string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_FILTER,
      payload: filter
    })
  }
}

export const setPage = (page: number) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_PAGE,
      payload: page
    })
  }
}
