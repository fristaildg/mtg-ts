import React from 'react'
import './LoginForm.scss'
import { useHistory } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const history = useHistory()

  return (
    <form className='login-form' onSubmit={() => {
      history.push('/dashboard')
    }}>
      <input type="text" />
      <input type="password" />
      <button type='submit'>login</button>
    </form>

  )
}

export default LoginForm
