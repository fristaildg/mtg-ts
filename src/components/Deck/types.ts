import { ListingItem } from '../../store/deckList/types'

export interface DeckProps {
  listing: ListingItem[],
  onRemoveCard: (item: ListingItem) => void
}
