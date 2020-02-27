import React from 'react'
import { useHistory } from 'react-router-dom'

import './DeckListItemNew.scss'

const DeckListItemNew = () => {
  const history = useHistory()

  return (
    <div className="decklist-item new-deck"
      onClick={() => history.push('/dashboard/build-deck')}
    >
      <h4>+ new deck</h4>
    </div>
  )
}

export default DeckListItemNew
  