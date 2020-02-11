import React, { useState } from 'react'
import { saveDeck } from '../../store/deckList/actions'
import { useDispatch } from 'react-redux'
import { ListingItem } from '../../store/deckList/types'
import _ from 'lodash'

interface DeckHeaderProps {
  listing: ListingItem[]
}

const DeckHeader: React.FC<DeckHeaderProps> = ({listing}) => {
  const [deckName, setDeckName] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="deck-header">
      <form onSubmit={(event) => {
        event.preventDefault()
        const deckObj = {
          _id: _.uniqueId('deck_'),
          name: deckName,
          listing
        }
        dispatch(saveDeck(deckObj))
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
        <button>Delete</button>
      </form>
    </div>
  )
}

export default DeckHeader

  