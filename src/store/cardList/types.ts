export interface Card {
  [key: string]: unknown
  name: string
  id: string
  image_uris: {
    small: string
    large: string
    png: string
  }
  type_line: string
}

export interface CardListState {
  cardList: Card[]
}

export const FETCH_CARDS = 'FETCH_CARDS'

interface FetchCardsAction {
  type: typeof FETCH_CARDS
  payload: {
    data: Card[]
  }
}

export type CardListActionTypes = FetchCardsAction
