import {
  CardListState,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_PENDING
} from './types'

const fetchCardsSuccess = (cardList: CardListState) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: cardList
  }
}

const fetchCardsPending = (bool: boolean) => {
  return {
    type: FETCH_CARDS_PENDING,
    payload: bool
  }
}

export const fetchCards = () => {
  return async (dispatch: any) => {
    dispatch(fetchCardsPending(true))
    try {
      const response = await fetch('https://api.scryfall.com/cards')
      const cardList = await response.json()  
      dispatch(fetchCardsSuccess({
        cardList: cardList.data,
        nextPage: cardList.next_page
      }))
    } finally {
      dispatch(fetchCardsPending(false))
    }
  }
}