import {
  GET_LOGGED_USER,
  LOGOUT_REQUEST,
  UserActionTypes,
  UserState
} from './types'

const initialState: UserState = {
  success: false,
  user: {}
}

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case `${GET_LOGGED_USER}_SUCCESS`:
      return {
        ...state,
        user: action.payload.data
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {}
      }
    default: return state
  }
}