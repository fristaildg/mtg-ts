import React, { useState } from 'react'
import { Card } from '../../store/cardList/types'
import CardItem from '../CardItem'
import CardDetail from '../CardDetail'

import './CardList.scss'

interface CardListProps {
  cardList: Card[]
}

const CardList: React.FC<CardListProps> = ({cardList}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [currentCard, setCurrentCard] = useState(cardList[0])

  const handleCardClick = (card: Card) => {
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

  return (
    <React.Fragment>
      <ul className='card-list'>
        {cardList.map(card => (
          <li
            className='card-list-item'
            key={card.id}
          >
            <CardItem card={card}
              onCardClick={() => {
                handleCardClick(card)
              }}
            />          
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
  