import { Card } from '../../store/cardList/types'

export interface CardDetailProps {
  cardInfo: Card,
  onCloseClick: () => void
  onNextClick: () => void
  onPrevClick: () => void
}
