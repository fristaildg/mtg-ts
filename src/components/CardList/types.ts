import { Card, Filter } from '../../store/cardList/types'

export interface CardListProps {
  cardList: Card[],
  onAddCard: (card: Card) => void
}

export interface RootState {
  CardListReducer: {
    currentPage: number,
    filters: Filter
  },
  PendingState: {
    FETCH_CARDS: {
      isLoading: boolean
    }
  }
}
