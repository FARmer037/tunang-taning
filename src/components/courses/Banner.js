import React, { useState, useEffect } from 'react'
import '../../styles/CoursesBanner.scss'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import video from '../../videos/ep4.mp4'
import Cookies from 'js-cookie'

const Banner = ({ isPay }) => {
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

        <p>ผศ.ดร.อิสมาอีล ราโอบ</p>

        <div className='banner__courses-button'>
          {isAuthen ? (
            <Button
              shape='round'
              type='primary'
              size='large'
              onClick={() => navigate('/dashboard')}
              disabled={!isPay}
            >
              เข้าอบรบ
            </Button>
          ) : (
            <Button shape='round' type='primary' size='large'>
              ลงทะเบียนเข้าอบรบ
            </Button>
          )}
        </div>
      </div>
      <div className='banner__videos'>
        <video src={video} controls />
      </div>
    </div>
  )
}

export default Banner
