import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../store/user/actions'

const RegisterForm: React.FC = () => {
  const [ newUserInfo , setNewUserInfo ] = useState({name: '', email: '', password: ''})
  const dispatch = useDispatch()

  const handleUpdateInfo = (field: string, value: string) => {
    setNewUserInfo(prevInfo => ({
      ...prevInfo,
      [field]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(register(newUserInfo))
  }

  return (
    <form className='register-form'
      onSubmit={event => handleSubmit(event)}
    >
      <input
        type="text"
        placeholder="your email"
        value={newUserInfo.email}
        onChange={event => handleUpdateInfo('email', event.target.value)}
      />
      <input
        type="text"
        placeholder="your full name"
        value={newUserInfo.name}
        onChange={event => handleUpdateInfo('name', event.target.value)}
      />
      <input
        type="password"
        placeholder="choose a password"
        value={newUserInfo.password}
        onChange={event => handleUpdateInfo('password', event.target.value)}
      />
      <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterForm
  