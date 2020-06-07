import { Card } from '../../store/cardList/types'

import { ListingItem, DeckWithId } from '../../store/deckList/types'

export interface RootState {
  PendingState: {
    FETCH_CARDS: {
      isLoading: boolean
    },
    FETCH_DECK: {
      isLoading: boolean
    }
  }
  CardListReducer: {
    cardList: Card[],
    isLoading: boolean
  }
  DeckListReducer: {
    deck: DeckWithId,
    isLoading: boolean
  }
}

export type Listing = ListingItem[] | []
