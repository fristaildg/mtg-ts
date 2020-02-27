import React from 'react'
import RegisterForm from '../RegisterForm'

import './RegisterPage.scss'

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <h2>Register</h2>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
  