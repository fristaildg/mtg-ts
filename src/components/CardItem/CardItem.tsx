import React from 'react'
import { Card } from '../../store/cardList/types'

interface CardItemProps {
  card: Card
}

const CardItem: React.FC<CardItemProps> = ({card}) => {
  return (
    <img
      className='card-image thumb'
      src={card.image_uris.small}
      alt={card.name}
      title={card.name}
    />
  )
}

export default CardItem
  