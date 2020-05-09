import React from 'react'
import CardItem from '../CardItem'
import { CardListItemProps } from './types'
import './CardListItem.scss'

const CardListItem: React.FC<CardListItemProps> = ({card, onViewCard, onAddCard}) => {
  return (
    <li
      className='card-list-item'      
    >
      <div className="item-button-wrapper">
        <button onClick={() => {
          onViewCard(card)
        }}>
          view
        </button>
        <button onClick={() => {
          onAddCard(card)
        }}>
          add
        </button>
      </div>
      <CardItem card={card} />                 
    </li>
  )
}

export default CardListItem
  