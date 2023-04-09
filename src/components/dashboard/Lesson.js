import React from 'react'
import '../../styles/Dashboard.scss'
import { Progress } from 'antd'
import { VideoCameraFilled, RightCircleFilled, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Lesson = ({ lesson }) => {
    const { lesson_id, title, progress, icon, is_done, quiz_id } = lesson

    const route = !lesson_id ? `/quiz/${quiz_id}` : `/video/${lesson_id}`

    return (
        <div className='lesson'>
            <div className='left'>
                <div>
                    <p>{lesson_id || quiz_id}</p>
                </div>
            </div>
            <div className='right'>
                <h2>{title}</h2>

                <Progress percent={!progress ? is_done ? 100 : 0 : progress} showInfo={false} />

                <div className='video-button'>
                    <div>
                        {
                            icon === 'VideoCameraFilled' ? (
                                <VideoCameraFilled style={{ color: '#777' }} />
                            ) : (
                                <EditOutlined style={{ color: '#777' }} />
                            )
                        }
                        <Link to={route} target="_blank">
                            {title}
                        </Link>
                    </div>

                    <RightCircleFilled style={{ color: '#777' }} />
                </div>
            </div>
        </div>
    )
}

export default Lesson
