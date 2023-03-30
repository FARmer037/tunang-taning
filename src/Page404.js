import React from 'react'
import './styles/Page404.scss'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <div className='page404'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for does not seem to exist.</p>

      <div className='page404__button'>
        <Button type='primary' onClick={() => navigate('/')}>
          BACK TO HOME
        </Button>
      </div>
      
      <div className='page404__smallButton'>
        <Button type='primary' size='small' onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default Page404
