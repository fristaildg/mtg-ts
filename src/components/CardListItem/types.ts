import { Card } from "../../store/cardList/types";

export interface CardListItemProps {
  card: Card,
  onViewCard: (card: Card) => void,
  onAddCard: (card: Card) => void
}