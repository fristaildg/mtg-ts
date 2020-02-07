export interface Card {
  [key: string]: unknown
  name: string,
  id: string,
  image_uris: {
    small: string,
    large: string,
    png: string
  }
}

export interface CardListState {
  cardList: Card[]
  nextPage?: string
}

export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS'

export const FETCH_CARDS_PENDING = 'FETCH_CARDS_PENDING'

interface FetchCardsAction {
  type: typeof FETCH_CARDS_SUCCESS
  payload: CardListState
}

interface FetchCardsPendingAction {
  type: typeof FETCH_CARDS_PENDING
  payload: boolean
}

export type CardListActionTypes = FetchCardsAction | FetchCardsPendingAction
