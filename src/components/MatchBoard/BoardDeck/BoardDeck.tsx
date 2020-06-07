import React from 'react'
import './BoardDeck.scss'
import deck from './deck.png'

const BoardDeck = () => {
  return (
    <img src={deck} alt="board deck" className='board-deck' />
  )
}

export default BoardDeck
