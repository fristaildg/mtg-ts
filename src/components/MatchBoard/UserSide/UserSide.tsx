import React from 'react'
import BoardDeck from '../BoardDeck'
import Graveyard from '../Graveyard'
import Hand from '../Hand'
import './UserSide.scss'
import DropArea from '../DropArea'

const UserSide = () => {
  return (
    <div className='user-side'>
      <BoardDeck />
      <Graveyard />
      <Hand />
      <DropArea />
    </div>
  )
}

export default UserSide
