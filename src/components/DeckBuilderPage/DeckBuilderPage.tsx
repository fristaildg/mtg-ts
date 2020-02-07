import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../store/cardList/actions'
import { Card } from '../../store/cardList/types'
import CardList from '../CardList'

interface RootState {
  CardListReducer: {
    cardList: Card[],
    isLoading: boolean
  }
}

const DeckBuilderPage: React.FC = () => {
  const cardList = useSelector((state: RootState) => state.CardListReducer.cardList)
  const isLoading = useSelector((state: RootState) => state.CardListReducer.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  return (
    <>
      <h2>Deck Builder</h2>
      {isLoading && <p>Loading cards...</p>}
      <CardList cardList={cardList} />
    </>
  )
}

export default DeckBuilderPage;
  