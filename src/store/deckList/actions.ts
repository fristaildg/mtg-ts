import { Deck, DeckWithId, SAVE_DECK, UPDATE_DECK, FETCH_DECKS, FETCH_DECK, DELETE_DECK, CLEAR_DECK, SELECT_DECK } from './types'
import { apiCall } from '../../lib/apiCall'
import { GET, POST, PUT, DELETE, PENDING, SUCCESS, REJECTED, CLEAR } from '../../lib/apiCall.types'
import { asyncActionCreator } from '../asyncActionCreator'

export const saveDeck = (deckObj: Deck) => {
    return async (dispatch: any) => {
        dispatch(asyncActionCreator(SAVE_DECK, PENDING))
        try {
            const response = await apiCall('decks', POST, deckObj)
            dispatch(asyncActionCreator(SAVE_DECK, SUCCESS, response))
        } catch (err) {
            dispatch(asyncActionCreator(SAVE_DECK, REJECTED, err))
        }
    }
}

export const updateDeck = (deckObj: DeckWithId) => {
    return async (dispatch: any) => {
        dispatch(asyncActionCreator(UPDATE_DECK, PENDING))
        try {
            const response = await apiCall(`decks/${deckObj._id}`, PUT, {
                name: deckObj.name,
                listing: deckObj.listing
            })
            dispatch(asyncActionCreator(UPDATE_DECK, SUCCESS, response))
        } catch (err) {
            dispatch(asyncActionCreator(UPDATE_DECK, REJECTED, err))
        }
    }
}

export const getDecks = () => {
    return async (dispatch: any) => {
        dispatch(asyncActionCreator(FETCH_DECKS, PENDING))
        try {
            const response = await apiCall('decks', GET)
            dispatch(asyncActionCreator(FETCH_DECKS, SUCCESS, response))
        } catch (err) {
            dispatch(asyncActionCreator(FETCH_DECKS, REJECTED, err))
        }
    }
}

export const getDeckById = (deckId: string) => {
    return async (dispatch: any) => {
        dispatch(asyncActionCreator(FETCH_DECK, PENDING))
        try {
            const response = await apiCall(`decks/${deckId}`, GET)
            dispatch(asyncActionCreator(FETCH_DECK, SUCCESS, response))
        } catch (err) {
            dispatch(asyncActionCreator(FETCH_DECK, REJECTED, err))
        }
    }
}

export const deleteDeck = (deckId: string) => {
    return async (dispatch: any) => {
        dispatch(asyncActionCreator(DELETE_DECK, PENDING))
        try {
            const response = await apiCall(`decks/${deckId}`, DELETE)
            dispatch(asyncActionCreator(DELETE_DECK, SUCCESS, response))
            dispatch(asyncActionCreator(DELETE_DECK, CLEAR))
        } catch (err) {
            dispatch(asyncActionCreator(DELETE_DECK, REJECTED, err))
        }
    }
}

export const clearDeck = () => {
    return (dispatch: any) => {
        dispatch({
            type: CLEAR_DECK
        })
    }
}

export const selectDeck = (deckId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: SELECT_DECK,
            payload: deckId
        })
    }
}