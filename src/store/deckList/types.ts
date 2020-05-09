export interface ListingItem {
    name: string
    id: string
    amount: number
    type: string
}

export interface Deck {
    name: string,
    listing: ListingItem[]
}

export interface DeckWithId extends Deck {
    _id: string
}

export interface DeckListState {
    deckList: DeckWithId[],
    count: number,
    [key: string]: any
    // deck: Deck | {}
}

export const FETCH_DECKS = 'FETCH_DECKS'
export const FETCH_DECK = 'FETCH_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const SAVE_DECK = 'SAVE_DECK'
export const UPDATE_DECK = 'UPDATE_DECK'
export const CLEAR_DECK = 'CLEAR_DECK'
export const SELECT_DECK = 'SELECT_DECK'

interface FetchDecksAction {
    type: typeof FETCH_DECKS
    payload: DeckListState
}

interface SaveDeckAction {
    type: typeof SAVE_DECK
    payload: Deck
}

interface FetchDeckAction {
    type: typeof FETCH_DECK
    payload: DeckWithId
}

interface UpdateDeckAction {
    type: typeof UPDATE_DECK
    payload: Deck
}

interface DeleteDeckAction {
    type: typeof DELETE_DECK
    payload: any
}

interface ClearDeckAction {
    type: typeof CLEAR_DECK
    payload: any
}

interface SelectDeckAction {
    type: typeof SELECT_DECK
    payload: string
}

export type DeckListActionTypes = FetchDecksAction | SaveDeckAction | FetchDeckAction | UpdateDeckAction | DeleteDeckAction | ClearDeckAction | SelectDeckAction