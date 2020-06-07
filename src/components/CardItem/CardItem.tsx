import React from 'react'
import { CardItemProps } from './types'

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <img
      className='card-image thumb'
      src={card.image_uris && card.image_uris.small}
      alt={card.name}
      title={card.name}
    // onClick={onCardClick}
    />
  )
}

export default CardItem
