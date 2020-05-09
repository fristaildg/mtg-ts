import {
  CardListState,
  FETCH_CARDS,
  CardListActionTypes,
  SET_FILTER,
  SET_PAGE
} from './types'

const initialState: CardListState = {
  cardList: [],
  currentPage: 1,
  filters: {}
}

export default (state = initialState, action: CardListActionTypes) => {
  switch (action.type) {
    case `${FETCH_CARDS}_SUCCESS`:
      return {
        ...state,
        cardList: action.payload.data,
        hasMore: action.payload.has_more
      }
    case SET_FILTER:
      return {
        ...state,
        filters: {...state.filters, ...action.payload},
        currentPage: 1
      }
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default: 
      return state
  }
}