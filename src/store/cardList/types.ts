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

export interface Filter {
  [key: string]: string
}

export interface CardListState {
  cardList: Card[]
  currentPage: number
  filters: Filter
}

export const FETCH_CARDS = 'FETCH_CARDS'
export const SET_FILTER = 'SET_FILTER'
export const SET_PAGE = 'SET_PAGE'

interface FetchCardsAction {
  type: typeof FETCH_CARDS
  // payload: {
  //   data: Card[]
  //   has_more: boolean
  // }
  payload: any
}

interface SetFilterAction {
  type: typeof SET_FILTER
  payload: Filter
}

interface SetPageAction {
  type: typeof SET_PAGE
  payload: number
}

export type CardListActionTypes = FetchCardsAction | SetFilterAction | SetPageAction
