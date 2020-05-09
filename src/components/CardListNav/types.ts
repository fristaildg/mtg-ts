import { Filter } from "../../store/cardList/types";

export interface RootState {
  CardListReducer: {
    currentPage: number,
    hasMore: boolean,
    filters: Filter
  }
}