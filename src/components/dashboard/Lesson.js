import React from 'react'
import '../../styles/Dashboard.scss'
import { Progress } from 'antd'
import { VideoCameraFilled, RightCircleFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Lesson = ({ lesson, isVideoDisable }) => {
  const {
    video_id,
    video_name,
    video_url,
    video_learning_time,
    video_learning_views,
    video_learning_status
  } = lesson

  const route = `/video/${video_id}`

  return (
    <div className='lesson'>
      <div className='left'>
        <div>
          <p>{video_id}</p>
        </div>
      </div>
      <div className='right'>
        <h2>{video_name}</h2>

        <Progress
          percent={video_learning_views}
          strokeColor={video_learning_views < 80 ? '#fb6f92' : '#52c41a'}
        />

        <div className='video-button'>
          <div>
            <VideoCameraFilled style={{ color: '#777' }} />

            {isVideoDisable ? (
              <Link onClick={() => alert('คุณยังไม่ทำแบบฝึกหัดก่อนเรียน')}>
                {video_name}
              </Link>
            ) : (
              <Link to={route} target='_blank'>
                {video_name}
              </Link>
            )}
          </div>

          <RightCircleFilled style={{ color: '#777' }} />
        </div>
      </div>
    </div>
  )
}

export default Lesson
