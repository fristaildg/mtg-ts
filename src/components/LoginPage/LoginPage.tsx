import React, { useEffect } from 'react'
import LoginForm from '../LoginForm'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import './LoginPage.scss'
import { RootState } from './types'

const LoginPage: React.FC = () => {
  const history = useHistory()
  const user = useSelector((state: RootState) => state.UserReducer.user)

  useEffect(() => {
    if (user && !_.isEmpty(user)) {
      history.push('/dashboard')
    }
  }, [user, history])

  return (
    <div className="login-page">
      <LoginForm />
      <span
        className='register-link'
        onClick={() => history.push('/register')}
      >
        Register
      </span>
    </div>
  )
}

export default LoginPage
