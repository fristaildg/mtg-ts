import { DeckWithId } from "../../store/deckList/types";

export interface RootState {
  DeckListReducer: {
    selectedDeck: string
  }
}

export interface DeckListItemProps {
  deck: DeckWithId
}