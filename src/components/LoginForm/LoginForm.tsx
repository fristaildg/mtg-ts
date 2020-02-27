import React, { useState } from 'react'
import './LoginForm.scss'
// import { useHistory } from 'react-router-dom'
import { login } from '../../store/user/actions'
import { useDispatch } from 'react-redux'

const LoginForm: React.FC = () => {
  // const history = useHistory()
  const dispatch = useDispatch()
  const [ credentials, setCredentials ] = useState({email: '', password: ''})

  const handleUpdateCreds = (field: string, value: string) => {
    setCredentials(prevCreds => ({
      ...prevCreds,
      [field]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(login(credentials))
  }

  return (
    <form className='login-form'
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        type="text"
        value={credentials.email}
        onChange={event => handleUpdateCreds('email', event.target.value)}
      />
      <input
        type="password"
        value={credentials.password}
        onChange={event => handleUpdateCreds('password', event.target.value)}
      />
      <button type='submit'>login</button>
    </form>

  )
}

export default LoginForm
