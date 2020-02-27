import { FETCH_COLORS, Symbol } from './types'
import { asyncActionCreator } from "../asyncActionCreator"
import { PENDING, REJECTED, SUCCESS } from "../../lib/apiCall.types"
import { mtgApiCall } from "../../lib/apiCall"

export const fetchColors = () => {
  return async (dispatch: any) => {
    dispatch(asyncActionCreator(FETCH_COLORS, PENDING))
    try {
      const response = await mtgApiCall('symbology')
      const colorList = response.data.filter((symbol: Symbol) => ['W', 'B', 'U', 'G', 'R'].indexOf(symbol.loose_variant) !== -1)
      dispatch(asyncActionCreator(FETCH_COLORS, SUCCESS, colorList))
    } catch (err) {
      dispatch(asyncActionCreator(FETCH_COLORS, REJECTED))
    }
  }
}