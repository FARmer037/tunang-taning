import React from 'react'
import '../../styles/Dashboard.scss'
import { Progress } from 'antd'
import { VideoCameraFilled, RightCircleFilled, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Lesson = ({ lesson, allLesson }) => {
    const { id, title, progress, icon } = lesson

    const route = (id) => {
        if (id === 0) {
            return '/quiz/1'
        } else if (id === allLesson.length - 1) {
            return '/quiz/2'
        } else {
            return '/video'
        }
    }

    return (
        <div className='lesson'>
            <div className='left'>
                <div>
                    <p>{id}</p>
                </div>
            </div>
            <div className='right'>
                <h2>{title}</h2>

                <Progress percent={progress} showInfo={false} />

                <div className='video-button'>
                    <div>
                        {
                            icon === 'VideoCameraFilled' ? (
                                <VideoCameraFilled style={{ color: '#777' }} />
                            ) : (
                                <EditOutlined style={{ color: '#777' }} />
                            )
                        }
                        <Link to={route(id)} target="_blank">
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
