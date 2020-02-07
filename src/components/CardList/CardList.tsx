import React from 'react'
import { Card } from '../../store/cardList/types'
import CardItem from '../CardItem'

import './CardList.scss'

interface CardListProps {
  cardList: Card[]
}

const CardList: React.FC<CardListProps> = ({cardList}) => {
  return (
    <ul className='card-list'>
      {cardList.map(card => (
        <li
          className='card-list-item'
          key={card.id}
        >
          <CardItem card={card} />
        </li>
      ))}
    </ul>
  )
}

export default CardList
  