import React, { useState } from 'react'
import '../../styles/CoursesBanner.scss'
import ReactPlayer from 'react-player'
import { Button } from 'antd'

const Banner = () => {
  const [isAuthen, setIsAuthen] = useState(false)

  return (
    <div className='banner'>
      <div className='banner__courses'>
        <h1>อบรมนิกะห์ออนไลน์</h1>
        <h1>(Nikah training online)</h1>

        <p>รศ. ดร.สมิทธิ์ บุญชุติมา</p>

        <div className='banner__courses-button'>
          {isAuthen ? (
            <div>
              <button>เข้าอบรบ</button>
              <button className='certificate'>เกียรติบัตร</button>
            </div>
          ) : (
            <Button shape='round' type='primary' size='large'>
              ลงทะเบียนเข้าอบรบ
            </Button>
          )}
        </div>
      </div>
      <div className='banner__videos'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=d0qVXvjV8LM'
          controls={true}
        />
      </div>
    </div>
  )
}

export default Banner
