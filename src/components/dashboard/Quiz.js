import React from 'react'
import '../../styles/Dashboard.scss'
import { Progress } from 'antd'
import { RightCircleFilled, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Quiz = ({ lesson, isQuizDisable }) => {
    const { QUIZ_ID, TITLE, IS_DONE } = lesson

    const route = `/quiz/${QUIZ_ID}`

    return (
        <div className='lesson'>
            <div className='left'>
                <div>
                    <p>{QUIZ_ID === 1 ? '0' : '16'}</p>
                </div>
            </div>
            <div className='right'>
                <h2>{TITLE}</h2>

                <Progress percent={IS_DONE === 0 ? 0 : 100} strokeColor={IS_DONE === 0 ? '#fb6f92' : '#52c41a'} />

                <div className='video-button'>
                    <div>
                        <EditOutlined style={{ color: '#777' }} />

                        {
                            isQuizDisable ? (
                                <Link>
                                    {TITLE}
                                </Link>
                            ) : (
                                <Link to={route} target='_blank'>
                                    {TITLE}
                                </Link>
                            )
                        }
                        {/* <Link to={route} target='_blank'>
                            {TITLE}
                        </Link> */}
                    </div>

                    <RightCircleFilled style={{ color: '#777' }} />
                </div>
            </div>
        </div>
    )
}

export default Quiz
