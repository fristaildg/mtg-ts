import {
    FETCH_DECKS_SUCCESS,
    DeckListActionTypes,
    DeckListState
} from './types'

const initialState: DeckListState = {
    deckList: []
}

export default (state = initialState, action: DeckListActionTypes) => {
    switch (action.type) {
        case FETCH_DECKS_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}