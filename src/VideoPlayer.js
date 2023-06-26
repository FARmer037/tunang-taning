import React, { useState, useRef, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { usePageVisibility } from 'react-page-visibility'
import './styles/Video.scss'
import Layout from './components/Layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import { Button } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import Warning from './Warning'
import { getYoutubeUrl } from './util'

const VideoPlayer = () => {
  const { id } = useParams()

  const [isPlaying, setIsPlaying] = useState(true)
  // const [isReady, setIsReady] = useState(false)
  const [played, setPlayed] = useState(0)
  const [startAt, setStartAt] = useState(0) // 0 หรือ รับจาก api
  const [duration, setDuration] = useState(0)
  const [isExpired, setIsExpired] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [videoUrl, setVideoUrl] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [token, setToken] = useState(null)
  const [memId, setMemId] = useState(null)

  const playerRef = useRef()

  const isVisible = usePageVisibility()

  // const onReady = useCallback(() => {
  //   if (!isReady) {
  //     const timeToStart = startAt
  //     console.log(timeToStart)
  //     playerRef.current.seekTo(timeToStart, 'seconds')
  //     setIsReady(true)
  //   }
  // }, [isReady])

  const updateTime = (videoTime, videoView) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}VideoUpdateTime`,
        {
          MEM_ID: memId,
          VIDEO_ID: id,
          VIDEO_TIME: videoTime,
          VIDEO_VIEW: videoView
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
          console.log(item.VIDEO_TIME)
          Cookies.set('token', itemdetail)
        } else {
          console.log(message)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getDuration = () => {
    let hour = played / 3600
    let min = (played % 3600) / 60
    let sec = (played % 3600) % 60

    if ((Math.floor(hour) + '').length === 1) {
      hour = '0' + Math.floor(hour)
    } else {
      hour = Math.floor(hour) + ''
    }

    if ((Math.floor(min) + '').length === 1) {
      min = '0' + Math.floor(min)
    } else {
      min = Math.floor(min) + ''
    }

    if ((Math.floor(sec) + '').length === 1) {
      sec = '0' + Math.floor(sec)
    } else {
      sec = Math.floor(sec) + ''
    }

    return hour + min + sec
  }

  const getPercent = () => {
    let percent = (played * 100) / duration

    return Math.floor(percent) + ''
  }

  const onPause = () => {
    //  update time ตอนกด pause
    let timeFormat = getDuration()
    let viewPercent = getPercent()

    updateTime(timeFormat, viewPercent)
  }

  useEffect(() => {
    //  update time ทุก ๆ 10 วิ
    let timeFormat = getDuration()
    let viewPercent = getPercent()

    updateTime(timeFormat, viewPercent)
  }, [played])

  useEffect(() => {
    //  update time ตอนออกไปแท็บอื่น
    if (!isVisible) {
      setIsPlaying(false)

      let timeFormat = getDuration()
      let viewPercent = getPercent()

      updateTime(timeFormat, viewPercent)
    }
  }, [isVisible])

  useEffect(() => {
    const getData = async () => {
      const token = Cookies.get('token')
      const memId = Cookies.get('user')

      setToken(token)
      setMemId(memId)

      axios
        .post(
          `${process.env.REACT_APP_API_URL}Video`,
          {
            MEM_ID: memId,
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
            let h = 0
            let m = 0
            let s = 0

            if (VIDEO_TIME.length === 6) {
              h = +VIDEO_TIME.slice(0, 2)
              m = +VIDEO_TIME.slice(2, 4)
              s = +VIDEO_TIME.slice(4, 6)
            }

            setStartAt(h * 3600 + m * 60 + s)
            setVideoUrl(VIDEO_URL)
            setVideoTitle(VIDEO_TITLE)
            setIsLoading(false)
          } else {
            alert(message)
          }

          Cookies.set('token', itemdetail)
        })
        .catch(err => {
          console.log(err.response.status)
          if (err.response.status === 401) {
            setIsExpired(true)
          }
        })
    }

    getData()
  }, [])

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
            // onReady={onReady}
            progressInterval={10000}
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
