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
import LoadingPage from './LoadingPage'
import { Button } from 'antd'
import numeral from 'numeral'
import axios from 'axios'
import Cookies from 'js-cookie'
import Warning from './Warning'
// import { createServer } from 'miragejs'

// createServer({
//     routes() {
//         this.post("/api/lessons", () => {
//             return {
//                 code: 10,
//                 item: {
//                     fName: 'Mustofa',
//                     lName: 'Sachi',
//                     progress: 21,
//                     quiz: [
//                         {
//                             quiz_id: 1,
//                             title: 'แบบทดสอบก่อนเรียน',
//                             is_done: true,
//                         },
//                         {
//                             quiz_id: 2,
//                             title: 'แบบทดสอบหลังเรียน',
//                             is_done: false,
//                         },
//                     ],
//                     lessons: [
//                         {
//                             lesson_id: 1,
//                             title: 'บทที่ 1: บทบัญญัติการแต่งงาน (นิกะฮฺ)',
//                             video_path: 'https://www.youtube.com/watch?v=j942wKiXFu8',
//                             progress: 100,
//                         },
//                         {
//                             lesson_id: 2,
//                             title: 'บทที่ 2: รูก่นนิกะฮฺ',
//                             video_path: 'https://www.youtube.com/watch?v=kVeOpcw4GWY',
//                             progress: 100,
//                         },
//                         {
//                             lesson_id: 3,
//                             title: 'บทที่ 3: สินสอด (มะฮัร)',
//                             video_path: 'https://www.youtube.com/watch?v=9D1x7-2FmTA',
//                             progress: 80,
//                         },
//                         {
//                             lesson_id: 4,
//                             title: 'บทที่ 4: การแต่งงานกับต่างศาสนิก',
//                             video_path: 'https://www.youtube.com/watch?v=pnhO8UaCgxg',
//                             progress: 20,
//                         },
//                         {
//                             lesson_id: 5,
//                             title: 'บทที่ 5: การจัดงานแต่งงาน (วาลีมะห์)',
//                             video_path: 'https://www.youtube.com/watch?v=0sSYmRImgRY',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 6,
//                             title: 'บทที่ 6: การมีเพศสัมพันธ์',
//                             video_path: 'https://www.youtube.com/watch?v=NbTrGcz4DW8',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 7,
//                             title: 'บทที่ 7: สิทธิหน้าที่ของคู่สามีภรรยา',
//                             video_path: 'https://www.youtube.com/watch?v=0XSDAup85SA',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 8,
//                             title: 'บทที่ 8: การให้ปัจจัยยังชีพแก่ภรรยา (นาฟาเกาะห์)',
//                             video_path: 'https://www.youtube.com/watch?v=4pO-HcG2igk',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 9,
//                             title: 'บทที่ 9: การหย่า (ตอล๊าก)',
//                             video_path: 'https://www.youtube.com/watch?v=rb1GWqCJid4',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 10,
//                             title: 'บทที่ 10: ช่วงเวลาการรอ (อิดดะห์)',
//                             video_path: 'https://www.youtube.com/watch?v=tHjxSVaj_wY',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 11,
//                             title: 'บทที่ 11: การคืนดี (รอเญาะ)',
//                             video_path: 'https://www.youtube.com/watch?v=PHaECbrKgs0',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 12,
//                             title: 'บทที่ 12: การเปรียบเทียบภรรยากับมารดา (ซิฮาร)',
//                             video_path: 'https://www.youtube.com/watch?v=-YpnB-zlkPU',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 13,
//                             title: 'บทที่ 13: คำกล่าวของสามีว่าภรรยามีชู้ (ลิอาน)',
//                             video_path: 'https://www.youtube.com/watch?v=CWEOYFzgOJs',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 14,
//                             title: 'บทที่ 14: ค่าทำขวัญ (มัตอะห์)',
//                             video_path: 'https://www.youtube.com/watch?v=gv9ugDJ1ynU',
//                             progress: 0,
//                         },
//                         {
//                             lesson_id: 15,
//                             title: 'บทที่ 15: การบริหารจัดการมรดก (ฟิกห์มะวาริษ)',
//                             video_path: 'https://www.youtube.com/watch?v=jQc_bTFZ5_I',
//                             progress: 0,
//                         },
//                     ]
//                 },
//                 itemdetail: 'token',
//                 message: 'get data success!'
//             }
//         })

//         this.post('/api/video', () => {
//             return {
//                 code: 10,
//                 item: {
//                     video_id: 1,
//                     video_start_at: '0:00:00',
//                     video_title: 'บทที่ 1: บทบัญญัติการแต่งงาน (นิกะฮฺ)',
//                     video_url: 'https://www.youtube.com/watch?v=jQc_bTFZ5_I',
//                 },
//                 itemdetail: 'token',
//                 message: 'success!'
//             }
//         })
//     }
// })

const VideoPlayer = () => {
    const { id } = useParams()
    const navige = useNavigate()

    const [isPlaying, setIsPlaying] = useState(true)
    const [isReady, setIsReady] = useState(false)
    const [played, setPlayed] = useState(0)
    const [startAt, setStartAt] = useState(0)     // 0 หรือ รับจาก api
    const [duration, setDuration] = useState(0)
    const [lesson, setLesson] = useState(null)
    const [isExpired, setIsExpired] = useState(false)

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

        return (Math.floor(hour) + ':' + Math.floor(min) + ':' + Math.floor(sec))
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
                .post(`/api/video`, {
                    USER_NAME: user,
                    VIDEO_ID: id
                }, {
                    headers: {
                        APP_KEY: process.env.REACT_APP_APP_KEY,
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(async response => {
                    const { code, item, itemdetail, message } = await response.data

                    if (code === 10) {
                        setLesson(item)
                        const { video_start_at } = item

                        let h = +video_start_at.slice(0, 1)
                        let m = +video_start_at.slice(2, 4)
                        let s = +video_start_at.slice(5, 7)

                        console.log('set start time')
                        setStartAt(m * 60 + s)
                    }

                    // Cookies.set('token', itemdetail)
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
    // useEffect(() => {
    //     const getData = async () => {
    //         const token = Cookies.get('token')
    //         const user = Cookies.get('user')

    //         axios
    //             .post(`${process.env.REACT_APP_API_URL}/lessons`, {
    //                 USER_NAME: user
    //             }, {
    //                 headers: {
    //                     APP_KEY: process.env.REACT_APP_APP_KEY,
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             })
    //             .then(async response => {
    //                 const { code, item, itemdetail, message } = await response.data

    //                 if (code === 10) {
    //                     const { lessons } = await item

    //                     const lesson = lessons.find(item => +item.lesson_id === +id)
    //                     setLesson(lesson)
    //                 }

    //                 // Cookies.set('token', itemdetail)
    //             })
    //             .catch(err => {
    //                 console.log(err.response.status)
    //                 if (err.response.status == 401) {
    //                     setIsExpired(true)
    //                 }
    //             })
    //     }

    //     getData()
    // }, [])

    useEffect(() => {
        if (!isVisible) {
            setIsPlaying(false)

            let timeFormat = getDuration()

            //  save played! (call api)
        }

    }, [isVisible])

    return (
        !lesson ? (
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
                            url={lesson.video_url}
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
