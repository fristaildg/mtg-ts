import React from 'react'
import UserSide from './UserSide'
import './MatchBoard.scss'
import RivalSide from './RivalSide'

const MatchBoard = () => {
  return (
    <div className='match-board'>
      <RivalSide />
      <UserSide />
    </div>
  )
}

export default MatchBoard
