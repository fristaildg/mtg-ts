import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { User } from '../../store/user/types'
import { logout } from '../../store/user/actions'
import _ from 'lodash'
import { removeUserToken } from '../../lib/userToken'

import './UserWidget.scss'

interface RootState {
  UserReducer: {
    user: User
  }
}

const UserWidget: React.FC = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user)
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    dispatch(logout())
    if (_.isEmpty(user)) {
      removeUserToken()
    }
  }

  return (
    <div className="user-widget">
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
  