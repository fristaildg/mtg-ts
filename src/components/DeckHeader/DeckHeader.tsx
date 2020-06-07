import React, { useState, useEffect } from 'react'
import { saveDeck, updateDeck, deleteDeck } from '../../store/deckList/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { DeckHeaderProps, RootState } from './types'
import { useAuth0 } from '../../contexts/auth0-context'

const DeckHeader: React.FC<DeckHeaderProps> = ({ deck }) => {
  const [deckName, setDeckName] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const deleteStatus = useSelector((state: RootState) => state.PendingState.DELETE_DECK)
  const { user } = useAuth0()

  useEffect(() => {
    if (deck.name) {
      setDeckName(deck.name)
    }
  }, [deck.name])

  useEffect(() => {
    if (deleteStatus && !deleteStatus.isLoading) {
      history.push('/dashboard/my-decks')
    }
  }, [deleteStatus, history])

  const handleDeleteDeck = () => {
    dispatch(deleteDeck(deck._id!))
  }

  return (
    <div className="deck-header">
      <form onSubmit={(event) => {
        event.preventDefault()
        const deckObj = {
          name: deckName,
          listing: deck.listing,
          user: user.email
        }

        if (!deck._id) {
          dispatch(saveDeck(deckObj))
        } else {
          dispatch(updateDeck({
            ...deckObj,
            _id: deck._id
          }))
        }
      }}>
        <input
          type="text"
          placeholder='Deck name'
          value={deckName}
          onChange={(event) => {
            setDeckName(event.target.value)
          }}
        />
        <button type='submit'>Save</button>
        {deck._id && (
          <button onClick={(event) => {
            event.preventDefault()
            handleDeleteDeck()
          }}>
            Delete
          </button>
        )}
      </form>
    </div>
  )
}

export default DeckHeader

