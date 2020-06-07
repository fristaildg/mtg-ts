import { ListingItem } from '../../store/deckList/types'

export interface DeckHeaderProps {
  deck: {
    listing: ListingItem[]
    _id?: string
    name?: string
  }
}

export interface RootState {
  PendingState: {
    DELETE_DECK: {
      isLoading: boolean
    }
  }
}
