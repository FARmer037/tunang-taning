import React, { useState, useRef, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { usePageVisibility } from 'react-page-visibility'
import './styles/Video.scss'
import Layout from './components/Layout'
import {
    LeftCircleOutlined,
    RightCircleOutlined
} from '@ant-design/icons'
import video from './videos/ep4.mp4'

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isReady, setIsReady] = useState(false)
    const [played, setPlayed] = useState(0)
    const [startAt, setStart] = useState(0)
    const [duration, setDuration] = useState(0)

    const playerRef = useRef();

    const isVisible = usePageVisibility()

    const onReady = useCallback(() => {
        if (!isReady) {
            const timeToStart = startAt
            playerRef.current.seekTo(timeToStart, "seconds")
            setIsReady(true);
        }
    }, [isReady]);

    const getDuration = (s) => {
        let min = s / 60
        let sec = s % 60
        return Math.floor(min) + ':' + sec
    }

    const getPercent = (s) => {
        const percent = s * 100 / duration
        return Math.ceil(percent)
    }

    useEffect(() => {
        if (!isVisible) {
            setIsPlaying(false)
        }

    }, [isVisible])

    return (
        <Layout>
            <div className='video'>
                <div className='video__header'>
                    <h3>อบรมนิกะห์ออนไลน์</h3>
                </div>

                {/* <ReactPlayer
                    ref={playerRef}
                    url='https://www.youtube.com/watch?v=eGfAyfY_X18'
                    // controls={true}
                    width="70%"
                    height="70%"
                    playing={isPlaying}
                    onReady={onReady}
                    progressInterval={3000}
                    playsinline={true}
                    onProgress={(progress) => {
                        setPlayed(progress.playedSeconds)
                    }}
                    // onPause={() => setPlayed(prev => prev - 3)}
                    onPlay={() => setIsPlaying(true)}
                    onDuration={(number) => setDuration(number)}
                /> */}

                <video src={video} controls />

                <div className='video__controls'>
                    <div className='video__controls-icon'>
                        <LeftCircleOutlined />
                    </div>

                    <p>บทที่ 4 การแต่งงานกับต่างศาสนิก</p>

                    <div className='video__controls-icon'>
                        <RightCircleOutlined />
                    </div>
                </div>

                {/* <p>ความยาววิดีโอ: {getDuration(duration)}</p>
                <p>ดูไปแล้ว: {getPercent(Math.floor(played))}%</p> */}
            </div>
        </Layout>
    )
}

export default VideoPlayer
