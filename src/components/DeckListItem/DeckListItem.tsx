import React from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import {
  RootState,
  DeckListItemProps
} from './types'
import './DeckListItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeck } from '../../store/deckList/actions'



const DeckListItem: React.FC<DeckListItemProps> = ({deck}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const selectedDeck = useSelector((state: RootState) => state.DeckListReducer.selectedDeck)

  const handleItemClick = (deckId: string) => {
    dispatch(selectDeck(deckId))
  }

  const handleEditClick = (deckId: string) => {
    history.push(`/dashboard/my-decks/${deckId}`)
  }

  return (
    <div className={classNames({
      "decklist-item": true,
      "selected": selectedDeck === deck._id
    })}
      onClick={() => handleItemClick(deck._id)}
    >
      <h4>{deck.name}</h4>
      <button
        onClick={(event) => {
          event.stopPropagation()
          handleEditClick(deck._id)
        }}
      >
        edit deck
      </button>
    </div>
  )
}

export default DeckListItem
  