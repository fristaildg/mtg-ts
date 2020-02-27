import {
  CardListState,
  FETCH_CARDS,
  CardListActionTypes
} from './types'

const initialState: CardListState = {
  cardList: []
}

export default (state = initialState, action: CardListActionTypes) => {
  switch (action.type) {
    case `${FETCH_CARDS}_SUCCESS`:
      return {
        ...state,
        cardList: action.payload.data
      }
    default: 
      return state
  }
}