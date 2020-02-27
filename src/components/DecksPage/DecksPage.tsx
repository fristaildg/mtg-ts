import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDecks } from '../../store/deckList/actions'
import DeckList from '../DeckList'
import { DeckListState } from '../../store/deckList/types'

import './DecksPage.scss'

interface RootState {
  DeckListReducer: DeckListState
}

const DecksPage: React.FC = () => {
  const dispatch = useDispatch()
  const deckList = useSelector((state: RootState) => state.DeckListReducer.deckList)

  useEffect(() => {
    dispatch(getDecks())
  }, [dispatch])

  return (
    <div className="decks-page">
      <h2>My decks</h2>
      <DeckList list={deckList}/>
    </div>
  )
}

export default DecksPage
