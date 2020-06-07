import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/user/actions'
import _ from 'lodash'
import { removeUserToken } from '../../lib/userToken'
import './UserWidget.scss'
import { RootState } from './types'
import { useAuth0 } from '../../contexts/auth0-context'

const UserWidget: React.FC = () => {
  // const user = useSelector((state: RootState) => state.UserReducer.user)
  // const dispatch = useDispatch()
  const { user, logout } = useAuth0()

  const handleLogoutClick = () => {
    logout()
  }

  return (
    <div className="user-widget">
      <img src={user.picture} alt={user.name} className='user-widget-image' />
      <span className='user-widget-name'>
        {user.name}
      </span>
      <div
        className="user-widget-logout"
        onClick={handleLogoutClick}
      >
        <span>X</span>
      </div>
    </div>
  )
}

export default UserWidget
