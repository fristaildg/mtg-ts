import React from 'react'
import { DeckWithId } from '../../store/deckList/types'
import DeckListItem from '../DeckListItem'
import DeckListItemNew from '../DeckListItemNew'

import './DeckList.scss'

interface DeckListProps {
  list: DeckWithId[]
}

const DeckList: React.FC<DeckListProps> = ({list}) => {
  return (
    <div className="decklist">
      {list.length > 0 && list.map(deck => (
        <DeckListItem
          key={deck._id}
          deck={deck}
        />
      ))}
      <DeckListItemNew />      
    </div>
  )
}

export default DeckList