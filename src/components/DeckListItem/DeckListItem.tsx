import React from 'react'
import { DeckWithId } from '../../store/deckList/types'
import { useHistory } from 'react-router-dom'

import './DeckListItem.scss'

interface DeckListItemProps {
  deck: DeckWithId
}

const DeckListItem: React.FC<DeckListItemProps> = ({deck}) => {
  const history = useHistory()

  return (
    <div className="decklist-item"
      onClick={() => history.push(`/dashboard/my-decks/${deck._id}`)}
    >
      <h4>{deck.name}</h4>
    </div>
  )
}

export default DeckListItem
  