import React, { useState, useEffect } from 'react'
import { Card } from '../../store/cardList/types'
import CardDetail from '../CardDetail'

import './CardList.scss'
import CardListFilters from '../CardListFilters'
import CardListNav from '../CardListNav'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards } from '../../store/cardList/actions'
import CardListItem from '../CardListItem'
import _ from 'lodash'
import { CardListProps, RootState } from './types'

const CardList: React.FC<CardListProps> = ({ cardList, onAddCard }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.CardListReducer.currentPage)
  const queryObj = useSelector((state: RootState) => state.CardListReducer.filters)
  const [showDetail, setShowDetail] = useState(false)
  const [currentCard, setCurrentCard] = useState(cardList && cardList[0])
  const fetchCardsStatus = useSelector((state: RootState) => state.PendingState.FETCH_CARDS)

  useEffect(() => {
    if (!_.isEmpty(queryObj)) {
      dispatch(fetchCards(queryObj, currentPage))
    }
  }, [dispatch, currentPage, queryObj])

  const cardListLoading = fetchCardsStatus && fetchCardsStatus.isLoading

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
        {cardListLoading ? (
          <p>
            Loading cards...
          </p>
        ) : (
            <React.Fragment>
              {cardList.length > 0 ? cardList.map(card => (
                <CardListItem
                  key={card.id}
                  card={card}
                  onViewCard={handleViewCardClick}
                  onAddCard={handleAddCardClick}
                />
              )) : (
                  <p>
                    No cards found :(
                  </p>
                )}
            </React.Fragment>
          )}
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
