import React, { useState, useEffect } from 'react'
import '../../styles/CoursesBanner.scss'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

const Banner = ({ status, videoUrl, lecturer }) => {
  const [isAuthen, setIsAuthen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const user = Cookies.get('user')

    if (user) {
      setIsAuthen(true)
    }
  }, [])

  return (
    <div className='banner'>
      <div className='banner__courses'>
        <h1>อบรมนิกะห์ออนไลน์</h1>
        <h1>(Nikah training online)</h1>

        <p>{lecturer}</p>

        <div className='banner__courses-button'>
          {isAuthen ? (
            <div>
              <Button
                shape='round'
                type='primary'
                size='large'
                onClick={() => navigate('/dashboard')}
                disabled={status !== '3'}
              >
                เข้าอบรบ
              </Button>
              <Button
                shape='round'
                type='primary'
                size='large'
                onClick={() => navigate('/books')}
                disabled={status !== '3'}
                style={{ marginLeft: 16, backgroundColor: '#c79274' }}
              >
                คู่มืออบรม
              </Button>
            </div>
          ) : (
            <Button
              shape='round'
              type='primary'
              size='large'
              onClick={() => navigate('/register')}
            >
              ลงทะเบียนเข้าอบรม
            </Button>
          )}
        </div>
      </div>
      <div className='banner__videos'>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width='100%'
        />
      </div>
    </div>
  )
}

export default Banner
