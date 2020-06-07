import React from 'react'
import BoardDeck from '../BoardDeck'
import Graveyard from '../Graveyard'
import DropArea from '../DropArea'
import Hand from '../Hand'

const RivalSide = () => {
  return (
    <div className="rival-side">
      <BoardDeck />
      <Graveyard />
      <Hand />
      <DropArea />
    </div>
  )
}

export default RivalSide
