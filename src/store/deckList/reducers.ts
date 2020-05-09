import {
    DeckListActionTypes,
    DeckListState,
    SAVE_DECK,
    FETCH_DECKS,
    FETCH_DECK,
    CLEAR_DECK,
    SELECT_DECK
} from './types'

const initialState: DeckListState = {
    deckList: [],
    count: 0
}

export default (state = initialState, action: DeckListActionTypes) => {
    switch (action.type) {
        case `${SAVE_DECK}_SUCCESS`: 
            return {
                ...state
            }
        case `${FETCH_DECKS}_SUCCESS`:
            return {
                ...state,
                count: action.payload.count,
                deckList: action.payload.data
            }
        case `${FETCH_DECK}_SUCCESS`: 
            return {
                ...state,
                deck: action.payload.data
            }
        case CLEAR_DECK: 
            const newState = {...state}

            delete newState.deck

            return newState
        case SELECT_DECK:
            return {
                ...state,
                selectedDeck: action.payload
            }
        default: return state
    }
}