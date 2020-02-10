import React, { useState } from 'react'
import { Card } from '../../store/cardList/types'
import CardItem from '../CardItem'
import CardDetail from '../CardDetail'

import './CardList.scss'

interface CardListProps {
  cardList: Card[],
  onAddCard: (card: Card) => void
}

const CardList: React.FC<CardListProps> = ({cardList, onAddCard}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [currentCard, setCurrentCard] = useState(cardList[0])

  const handleViewCardClick = (card: Card) => {
    setCurrentCard(card)
    setShowDetail(true)
  }

  const handleCloseClick = () => {
    setShowDetail(false)
  }

  const handlePrevClick = () => {
    const currentIndex = cardList.findIndex(card => currentCard.id === card.id)
    const newIndex = currentIndex - 1

    if (currentIndex === 0) {
      return false
    }

    setCurrentCard(cardList[newIndex])
  }

  const handleNextClick = () => {
    const currentIndex = cardList.findIndex(card => currentCard.id === card.id)
    const newIndex = currentIndex + 1

    if (currentIndex === cardList.length - 1) {
      return false
    }
    setCurrentCard(cardList[newIndex])
  }

  const handleAddCardClick = (card: Card) => {
    onAddCard(card)
  }

  return (
    <React.Fragment>
      <ul className='card-list'>
        {cardList.map(card => (
          <li
            className='card-list-item'
            key={card.id}
          >
            <div className="item-button-wrapper">
              <button onClick={() => {
                handleViewCardClick(card)
              }}>
                view
              </button>
              <button onClick={() => {
                handleAddCardClick(card)
              }}>
                add
              </button>
            </div>
            <CardItem card={card} />                 
          </li>
        ))}
      </ul>
      {showDetail && (
        <CardDetail cardInfo={currentCard}
          onCloseClick={handleCloseClick}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      )}
    </React.Fragment>
  )
}

export default CardList
  