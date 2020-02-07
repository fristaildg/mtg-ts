import React from 'react'
import { Card } from '../../store/cardList/types'

interface CardDetailProps {
  cardInfo: Card
}

const CardDetail: React.FC<CardDetailProps> = ({cardInfo}) => {
  const {
    name,
    mana_cost,
    colors,
    set_name,
    image_uris: {
      png
    }
  } = cardInfo

  return (
    <div className="card-detail">
      <h2>{name}</h2>
      <img src={png} alt={name} />
    </div>
  )
}

export default CardDetail
  