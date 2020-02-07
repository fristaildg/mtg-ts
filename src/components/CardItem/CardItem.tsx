import React from 'react'
import { Card } from '../../store/cardList/types'

interface CardItemProps {
  card: Card,
  onCardClick: () => void
}

const CardItem: React.FC<CardItemProps> = ({card, onCardClick}) => {
  return (
    <img
      className='card-image thumb'
      src={card.image_uris.small}
      alt={card.name}
      title={card.name}
      onClick={onCardClick}
    />
  )
}

export default CardItem
  