import PouchDb from 'pouchdb'
import { Deck } from './types'

const decks = new PouchDb('Decks')

// const saveDeckSuccess = () => {
//     return {
//         type: SAVE_DECK_SUCCESS
//     }
// }

export const saveDeck = (deckObj: Deck) => {
    return async (dispatch: any) => {
        try {
            const response = await decks.put(deckObj)
            console.log(response)
        } finally {
            console.log('listo')
        }
    }
}

export const getDecks = () => {
    return async (dispatch: any) => {
        try {
            const response = await decks.allDocs()
            console.log(response)
        } finally {
            console.log('fetched')
        }
    }
}