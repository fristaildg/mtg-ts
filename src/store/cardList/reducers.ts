import {
  CardListState,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_PENDING,
  CardListActionTypes
} from './types'

const initialState: CardListState = {
  cardList: []  
}

export default (state = initialState, action: CardListActionTypes) => {
  switch (action.type) {
    case FETCH_CARDS_PENDING:
      return {
        ...state,
        isLoading: action.payload
      }
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state
  }
}