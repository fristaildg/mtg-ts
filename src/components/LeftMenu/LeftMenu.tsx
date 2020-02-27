import React from 'react'
import { useHistory } from 'react-router-dom'
import UserWidget from '../UserWidget'

import './LeftMenu.scss'

const LeftMenu: React.FC = () => {
  const history = useHistory()

  return (
    <div className="left-menu">
      <ul className='left-menu-nav'>
        <li onClick={() => {
          history.push('/dashboard/my-decks')
        }}>
          My decks
        </li>
      </ul>
      <div className="user-widget-wrapper">
        <UserWidget />
      </div>
    </div>
  )
}

export default LeftMenu
  