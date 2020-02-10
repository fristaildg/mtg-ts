import React from 'react'
import { ListingItem } from '../../store/deckList/types'

import './Deck.scss'

interface DeckProps {
  listing: ListingItem[],
  onRemoveCard: (item: ListingItem) => void
}

const Deck: React.FC<DeckProps> = ({listing, onRemoveCard}) => {
  return (
    <div className="deck">
      <ul className="listing">
        {listing.map((card: ListingItem) => (
          <li key={card.id}
            className="listing-item"
            onClick={() => {
              onRemoveCard(card)
            }}
          >
            <span className="listing-item-name">{card.name}</span>
            <span className="listing-item-amount">{card.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Deck
