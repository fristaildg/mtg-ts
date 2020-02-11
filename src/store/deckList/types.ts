export interface ListingItem {
    name: string
    id: string
    amount: number
}

export interface Deck {
    name: string,
    _id: string,
    listing: ListingItem[]
}

export interface DeckListState {
    deckList: Deck[]
}

export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS'

interface FetchDecksAction {
    type: typeof FETCH_DECKS_SUCCESS
    payload: DeckListState
}

export type DeckListActionTypes = FetchDecksAction