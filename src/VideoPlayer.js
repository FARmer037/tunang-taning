import React, { useState, useRef, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { usePageVisibility } from 'react-page-visibility'
import './styles/Video.scss'
import Layout from './components/Layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import { Button } from 'antd'
import numeral from 'numeral'
import axios from 'axios'
import Cookies from 'js-cookie'
import Warning from './Warning'
import { getYoutubeUrl } from './util'

const VideoPlayer = () => {
  const { id } = useParams()

  const [isPlaying, setIsPlaying] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [played, setPlayed] = useState(0)
  const [startAt, setStartAt] = useState(0) // 0 หรือ รับจาก api
  const [duration, setDuration] = useState(0)
  const [isExpired, setIsExpired] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [videoUrl, setVideoUrl] = useState('')
  const [videoTitle, setVideoTitle] = useState('')

  const playerRef = useRef()

  const isVisible = usePageVisibility()

  const onReady = useCallback(() => {
    if (!isReady) {
      const timeToStart = startAt
      console.log(timeToStart)
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

    return Math.floor(hour) + ':' + Math.floor(min) + ':' + Math.floor(sec)
  }

  useEffect(() => {
    let timeFormat = getDuration()

    //  save timeFormat! (call api)
  }, [played])

  useEffect(() => {
    const getData = async () => {
      const token = Cookies.get('token')
      const user = Cookies.get('user')

      axios
        .post(
          `${process.env.REACT_APP_API_URL}Video`,
          {
            // MEM_ID: '00001',
            MEM_ID: user,
            VIDEO_ID: id
          },
          {
            headers: {
              APP_KEY: process.env.REACT_APP_APP_KEY,
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(async response => {
          // console.log(response.data)
          const { code, item, itemdetail, message } = await response.data

          if (code === 10) {
            const { VIDEO_TIME, VIDEO_TITLE, VIDEO_URL } = item
            const video_start_at = '000000'

            let h = +video_start_at.slice(0, 2)
            let m = +video_start_at.slice(2, 4)
            let s = +video_start_at.slice(4, 6)

            let nh = +VIDEO_TIME.slice(0, 2)
            let nm = +VIDEO_TIME.slice(2, 4)
            let ns = +VIDEO_TIME.slice(4, 6)

            setIsLoading(false)
            setStartAt(h * 3600 + m * 60 + s)
            // setStartAt(nh * 3600 + nm * 60 + ns)
            setVideoUrl(VIDEO_URL)
            setVideoTitle(VIDEO_TITLE)
          } else {
            alert(message)
          }

          Cookies.set('token', itemdetail)
        })
        .catch(err => {
          console.log(err.response.status)
          if (err.response.status == 401) {
            setIsExpired(true)
          }
        })
    }

    getData()
  }, [])

  useEffect(() => {
    if (!isVisible) {
      setIsPlaying(false)

      let timeFormat = getDuration()

      //  save played! (call api)
    }
  }, [isVisible])

  return isLoading ? (
    isExpired ? (
      <Warning />
    ) : (
      <LoadingPage />
    )
  ) : (
    <Layout>
      <div className='video'>
        <div className='video__header'>
          <h3>อบรมนิกะห์ออนไลน์</h3>
        </div>

        <div className='viveo__player'>
          <ReactPlayer
            ref={playerRef}
            url={getYoutubeUrl(videoUrl)}
            // controls={true}
            width='100%'
            height='100%'
            playing={isPlaying}
            onReady={onReady}
            progressInterval={1000}
            playsinline={true}
            onProgress={progress => {
              setPlayed(progress.playedSeconds)
            }}
            // onPause={() => setPlayed(prev => prev - 3)}
            onPause={onPause}
            onPlay={() => setIsPlaying(true)}
            onDuration={number => setDuration(number)}
            config={{
              youtube: {
                playerVars: {
                  start: startAt
                }
              }
            }}
          />
        </div>

        <div className='video__controls'>
          <div className='video__controls-icon'>
            <a href={+id - 1 === 0 ? '/quiz/1' : `/video/${+id - 1}`}>
              <Button icon={<LeftOutlined />} />
            </a>
          </div>

          <p>{videoTitle}</p>

          <div className='video__controls-icon'>
            <a href={+id + 1 > 15 ? '/quiz/2' : `/video/${+id + 1}`}>
              <Button icon={<RightOutlined />} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VideoPlayer
