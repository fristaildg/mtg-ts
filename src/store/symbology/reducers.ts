import {
  SymbologyActionTypes, FETCH_COLORS
} from './types'

const initialState = {
  colorList: []
}

export default (state = initialState, action: SymbologyActionTypes) => {
  switch (action.type) {
    case `${FETCH_COLORS}_SUCCESS`:
      return {
        ...state,
        colorList: action.payload
      }
    default: return state
  }
}
