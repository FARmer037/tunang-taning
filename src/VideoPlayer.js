import React, { useState, useRef, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { usePageVisibility } from 'react-page-visibility'
import './styles/Video.scss'
import Layout from './components/Layout'
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom'
import { lessons } from './Lessons'
import LoadingPage from './LoadingPage'
import { Button } from 'antd'
import numeral from 'numeral'

const VideoPlayer = () => {
    const { id } = useParams()
    const navige = useNavigate()

    const [isPlaying, setIsPlaying] = useState(true)
    const [isReady, setIsReady] = useState(false)
    const [played, setPlayed] = useState(0)
    const [startAt, setStart] = useState(0)     // 0 หรือ รับจาก api
    const [duration, setDuration] = useState(0)
    const [lesson, setLesson] = useState(null)

    const playerRef = useRef()

    const isVisible = usePageVisibility()

    const onReady = useCallback(() => {
        if (!isReady) {
            const timeToStart = startAt
            playerRef.current.seekTo(timeToStart, 'seconds')
            setIsReady(true)
        }
    }, [isReady])

    const onPause = () => {
        let timeFormat = getDuration()

        //  save played! (call api)

    }

    const getDuration = () => {
        // let timeFormat = numeral(played).format('00:00:00')
        // console.log(timeFormat)

        let hour = played / 3600
        let min = (played % 3600) / 60
        let sec = (played % 3600) % 60

        return (Math.floor(hour) + ':' + Math.floor(min) + ':' + Math.floor(sec))
    }

    useEffect(() => {
        let timeFormat = getDuration()

        //  save timeFormat! (call api)

    }, [played])

    useEffect(() => {
        const getLesson = () => {
            const lesson = lessons.find(item => +item.lesson_id === +id)

            setLesson(lesson)
        }

        getLesson()

        return () => { }
    }, [])

    useEffect(() => {
        if (!isVisible) {
            setIsPlaying(false)

            let timeFormat = getDuration()

            //  save played! (call api)
        }

    }, [isVisible])

    return (
        !lesson ? (
            <LoadingPage />
        ) : (
            <Layout>
                <div className='video'>
                    <div className='video__header'>
                        <h3>อบรมนิกะห์ออนไลน์</h3>
                    </div>

                    <div className='viveo__player'>
                        <ReactPlayer
                            ref={playerRef}
                            url={lesson.video_path}
                            // controls={true}
                            width='100%'
                            height='100%'
                            playing={isPlaying}
                            onReady={onReady}
                            progressInterval={1000}
                            playsinline={true}
                            onProgress={(progress) => {
                                setPlayed(progress.playedSeconds)
                            }}
                            // onPause={() => setPlayed(prev => prev - 3)}
                            onPause={onPause}
                            onPlay={() => setIsPlaying(true)}
                            onDuration={(number) => setDuration(number)}
                        />
                    </div>

                    <div className='video__controls'>
                        <div className='video__controls-icon'>
                            <a href={(+id - 1) === 0 ? '/quiz/1' : `/video/${+id - 1}`}>
                                <Button icon={<LeftOutlined />} />
                            </a>
                        </div>

                        <p>{lesson ? lesson.title : ''}</p>

                        <div className='video__controls-icon'>
                            <a href={(+id + 1) > 15 ? '/quiz/2' : `/video/${+id + 1}`}>
                                <Button icon={<RightOutlined />} />
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    )
}

export default VideoPlayer
