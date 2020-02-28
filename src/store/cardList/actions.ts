import {
  FETCH_CARDS
} from './types'

import { asyncActionCreator } from '../asyncActionCreator'
import { SUCCESS, PENDING, REJECTED, MtgQueryObj } from '../../lib/apiCall.types'
import { mtgApiCall } from '../../lib/apiCall'

export const fetchCards = (queryObj: MtgQueryObj) => {
  return async (dispatch: any) => {
    dispatch(asyncActionCreator(FETCH_CARDS, PENDING))
    try {
      const response = await mtgApiCall('cards', queryObj)
      dispatch(asyncActionCreator(FETCH_CARDS, SUCCESS, response))
    } catch (err) {
      dispatch(asyncActionCreator(FETCH_CARDS, REJECTED, err))
    }
  }
}