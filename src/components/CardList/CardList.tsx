import React, { useState, useEffect } from 'react'
import { Card, Filter } from '../../store/cardList/types'
import CardDetail from '../CardDetail'

import './CardList.scss'
import CardListFilters from '../CardListFilters'
import CardListNav from '../CardListNav'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards } from '../../store/cardList/actions'
import CardListItem from '../CardListItem'
import _ from 'lodash'

interface CardListProps {
  cardList: Card[],
  onAddCard: (card: Card) => void
}

interface RootState {
  CardListReducer: {
    currentPage: number,
    filters: Filter
  }
}

const CardList: React.FC<CardListProps> = ({cardList, onAddCard}) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.CardListReducer.currentPage)
  const queryObj = useSelector((state: RootState) => state.CardListReducer.filters)
  const [showDetail, setShowDetail] = useState(false)
  const [currentCard, setCurrentCard] = useState(cardList[0])

  useEffect(() => {
    if (!_.isEmpty(queryObj)) {
      dispatch(fetchCards(queryObj, currentPage))
    }
  }, [dispatch, currentPage, queryObj])

  const handleViewCardClick = (card: Card) => {
    setCurrentCard(card)
    setShowDetail(true)
  }

  const handleCloseClick = () => {
    setShowDetail(false)
  }

  const handlePrevCardClick = () => {
    const currentIndex = cardList.findIndex(card => currentCard.id === card.id)
    const newIndex = currentIndex - 1

    if (currentIndex === 0) {
      return false
    }

    setCurrentCard(cardList[newIndex])
  }

  const handleNextCardClick = () => {
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
      <CardListFilters />
      <ul className='card-list'>
        {cardList.map(card => (
          <CardListItem
            key={card.id}
            card={card}
            onViewCard={handleViewCardClick}
            onAddCard={handleAddCardClick}
          />
        ))}
      </ul>
      {showDetail && (
        <CardDetail cardInfo={currentCard}
          onCloseClick={handleCloseClick}
          onPrevClick={handlePrevCardClick}
          onNextClick={handleNextCardClick}
        />
      )}
      <CardListNav />
    </React.Fragment>
  )
}

export default CardList
  