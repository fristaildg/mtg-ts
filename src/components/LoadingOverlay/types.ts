export interface RootState {
  PendingState: {
    SAVE_DECK: {
      isLoading: boolean
    },
    UPDATE_DECK: {
      isLoading: boolean
    },
    DELETE_DECK: {
      isLoading: boolean
    },
    // FETCH_CARDS: {
    //   isLoading: boolean
    // },
    FETCH_DECK: {
      isLoading: boolean
    }
  }
}
