import React, { useState, useRef, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { usePageVisibility } from 'react-page-visibility'
import './styles/Video.scss'
import Layout from './components/Layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom'
import { lessons } from './Lessons'
import LoadingPage from './LoadingPage'
import { Button } from 'antd'

const VideoPlayer = () => {
  const { id } = useParams()
  const navige = useNavigate()

  const [isPlaying, setIsPlaying] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [played, setPlayed] = useState(0)
  const [startAt, setStart] = useState(0)
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

  const getDuration = s => {
    let min = s / 60
    let sec = s % 60
    return Math.floor(min) + ':' + sec
  }

  const getPercent = s => {
    const percent = (s * 100) / duration
    return Math.ceil(percent)
  }

  const nextVideo = id => {
    if (id === 0) {
      console.log(id)
    } else if (id === lessons.length - 1) {
      console.log(id)
    } else {
      navige(`/video/${id}`)
    }
  }

  useEffect(() => {
    const getLesson = () => {
      const lesson = lessons.find(item => +item.lesson_id === +id)

      setLesson(lesson)
    }

    getLesson()

    return () => {}
  }, [])

  useEffect(() => {
    if (!isVisible) {
      setIsPlaying(false)
    }
  }, [isVisible])

  return !lesson ? (
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
            progressInterval={3000}
            playsinline={true}
            onProgress={progress => {
              setPlayed(progress.playedSeconds)
            }}
            // onPause={() => setPlayed(prev => prev - 3)}
            onPlay={() => setIsPlaying(true)}
            onDuration={number => setDuration(number)}
          />
        </div>

        <div className='video__controls'>
          <div className='video__controls-icon'>
            <Button
              icon={<LeftOutlined />}
              onClick={() => nextVideo(+id - 1)}
            />
          </div>

          <p>{lesson ? lesson.title : ''}</p>

          <div className='video__controls-icon'>
            <Button
              icon={<RightOutlined />}
              onClick={() => nextVideo(+id + 1)}
            />
          </div>
        </div>

        {/* <p>ความยาววิดีโอ: {getDuration(duration)}</p>
                <p>ดูไปแล้ว: {getPercent(Math.floor(played))}%</p> */}
      </div>
    </Layout>
  )
}

export default VideoPlayer
