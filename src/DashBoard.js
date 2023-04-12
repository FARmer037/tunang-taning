import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import DashboardHeader from './components/dashboard/DashboardHeader'
import LoadingPage from './LoadingPage'
import './styles/Dashboard.scss'
import Lesson from './components/dashboard/Lesson'
import { ReloadOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import Warning from './Warning'
import { createServer } from 'miragejs'

createServer({
    routes() {
        this.post("/api/lessons", () => {
            return {
                code: 10,
                item: {
                    fName: 'Mustofa',
                    lName: 'Sachi',
                    progress: 21,
                    quiz: [
                        {
                            quiz_id: 1,
                            title: 'แบบทดสอบก่อนเรียน',
                            is_done: true,
                        },
                        {
                            quiz_id: 2,
                            title: 'แบบทดสอบหลังเรียน',
                            is_done: false,
                        },
                    ],
                    lessons: [
                        {
                            lesson_id: 1,
                            title: 'บทที่ 1: บทบัญญัติการแต่งงาน (นิกะฮฺ)',
                            video_path: 'https://www.youtube.com/watch?v=j942wKiXFu8',
                            progress: 100,
                        },
                        {
                            lesson_id: 2,
                            title: 'บทที่ 2: รูก่นนิกะฮฺ',
                            video_path: 'https://www.youtube.com/watch?v=kVeOpcw4GWY',
                            progress: 100,
                        },
                        {
                            lesson_id: 3,
                            title: 'บทที่ 3: สินสอด (มะฮัร)',
                            video_path: 'https://www.youtube.com/watch?v=9D1x7-2FmTA',
                            progress: 80,
                        },
                        {
                            lesson_id: 4,
                            title: 'บทที่ 4: การแต่งงานกับต่างศาสนิก',
                            video_path: 'https://www.youtube.com/watch?v=pnhO8UaCgxg',
                            progress: 20,
                        },
                        {
                            lesson_id: 5,
                            title: 'บทที่ 5: การจัดงานแต่งงาน (วาลีมะห์)',
                            video_path: 'https://www.youtube.com/watch?v=0sSYmRImgRY',
                            progress: 0,
                        },
                        {
                            lesson_id: 6,
                            title: 'บทที่ 5: การมีเพศสัมพันธ์',
                            video_path: 'https://www.youtube.com/watch?v=NbTrGcz4DW8',
                            progress: 0,
                        },
                        {
                            lesson_id: 7,
                            title: 'บทที่ 7: สิทธิหน้าที่ของคู่สามีภรรยา',
                            video_path: 'https://www.youtube.com/watch?v=0XSDAup85SA',
                            progress: 0,
                        },
                        {
                            lesson_id: 8,
                            title: 'บทที่ 8: การให้ปัจจัยยังชีพแก่ภรรยา (นาฟาเกาะห์)',
                            video_path: 'https://www.youtube.com/watch?v=4pO-HcG2igk',
                            progress: 0,
                        },
                        {
                            lesson_id: 9,
                            title: 'บทที่ 9: การหย่า (ตอล๊าก)',
                            video_path: 'https://www.youtube.com/watch?v=rb1GWqCJid4',
                            progress: 0,
                        },
                        {
                            lesson_id: 10,
                            title: 'บทที่ 10: ช่วงเวลาการรอ (อิดดะห์)',
                            video_path: 'https://www.youtube.com/watch?v=tHjxSVaj_wY',
                            progress: 0,
                        },
                        {
                            lesson_id: 11,
                            title: 'บทที่ 11: การคืนดี (รอเญาะ)',
                            video_path: 'https://www.youtube.com/watch?v=PHaECbrKgs0',
                            progress: 0,
                        },
                        {
                            lesson_id: 12,
                            title: 'บทที่ 12: การเปรียบเทียบภรรยากับมารดา (ซิฮาร)',
                            video_path: 'https://www.youtube.com/watch?v=-YpnB-zlkPU',
                            progress: 0,
                        },
                        {
                            lesson_id: 13,
                            title: 'บทที่ 13: คำกล่าวของสามีว่าภรรยามีชู้ (ลิอาน)',
                            video_path: 'https://www.youtube.com/watch?v=CWEOYFzgOJs',
                            progress: 0,
                        },
                        {
                            lesson_id: 14,
                            title: 'บทที่ 14: ค่าทำขวัญ (มัตอะห์)',
                            video_path: 'https://www.youtube.com/watch?v=gv9ugDJ1ynU',
                            progress: 0,
                        },
                        {
                            lesson_id: 15,
                            title: 'บทที่ 15: การบริหารจัดการมรดก (ฟิกห์มะวาริษ)',
                            video_path: 'https://www.youtube.com/watch?v=jQc_bTFZ5_I',
                            progress: 0,
                        },
                    ]
                },
                itemdetail: 'token',
                message: 'get data success!'
            }
        })
    }
})

const DashBoard = () => {
    const [lessons, setLessons] = useState(null)
    const [quiz, setQuiz] = useState(null)
    const [name, setName] = useState('')
    const [progress, setProgress] = useState(0)
    const [isExpired, setIsExpired] = useState(false)

    const refreshPage = () => {
        window.location.reload()
    }

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
    //                     const { fName, lName, progress, lessons, quiz } = await item

    //                     setName(fName + ' ' + lName)
    //                     setProgress(progress)
    //                     setLessons(lessons)
    //                     setQuiz(quiz)
    //                 }

    //                 Cookies.set('token', itemdetail)
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
        const getData = async () => {
            const token = Cookies.get('token')
            const user = Cookies.get('user')

            axios
                .post(`/api/lessons`, {
                    USER_NAME: user
                }, {
                    headers: {
                        APP_KEY: process.env.REACT_APP_APP_KEY,
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(async response => {
                    const { code, item, itemdetail, message } = await response.data

                    if (code === 10) {
                        const { fName, lName, progress, lessons, quiz } = await item

                        setName(fName + ' ' + lName)
                        setProgress(progress)
                        setLessons(lessons)
                        setQuiz(quiz)
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

    return (
        !lessons ? (
            isExpired ? (
                <Warning />
            ) : (
                <LoadingPage />
            )
        ) : (
            <Layout>
                <DashboardHeader
                    name={name}
                    progress={progress}
                />

                <div className='dashboard'>
                    <div className='dashboard__top'>
                        <p>Learning Path</p>

                        <Tooltip title='รีเฟรช'>
                            <Button icon={<ReloadOutlined />} onClick={() => refreshPage()} />
                        </Tooltip>
                    </div>

                    {
                        quiz != 0 && (
                            <Lesson
                                lesson={quiz[0]}
                            />
                        )
                    }

                    {
                        lessons?.map((element) => (
                            <Lesson
                                key={element.lesson_id}
                                lesson={element}
                            />
                        ))
                    }

                    {
                        quiz != 0 && (
                            <Lesson
                                lesson={quiz[1]}
                            />
                        )
                    }
                </div>
            </Layout>
        )
    )
}

export default DashBoard
