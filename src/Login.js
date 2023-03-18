import React from 'react'
import './login.scss'
import LoginForm from './components/LoginForm'

const Login = () => {
  return (
    <div className='login'>
      <div className='login__card'>
        <div className='login__card-image'>
          <img src={require('./images/login.jpeg')} alt='login image' />
        </div>

        <LoginForm />
      </div>
    </div>
  )
}

export default Login
