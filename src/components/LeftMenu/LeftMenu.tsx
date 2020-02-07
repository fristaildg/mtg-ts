import React from 'react'
import { useHistory } from 'react-router-dom'

import './LeftMenu.scss'

const LeftMenu: React.FC = () => {
  const history = useHistory()

  return (
    <div className="left-menu">
      <ul>
        <li onClick={() => {
          history.push('/dashboard/build-deck')
        }}>
          Deck builder
        </li>
      </ul>
    </div>
  )
}

export default LeftMenu
  