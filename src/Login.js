import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './login.scss'
import LoginForm from './components/LoginForm'

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = Cookies.get('user')

    if (user) {
      navigate('/courses')
    }
  }, [])

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
