import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import DashboardHeader from './components/dashboard/DashboardHeader'
import LoadingPage from './LoadingPage'
import './styles/Dashboard.scss'
import Lesson from './components/dashboard/Lesson'
import Quiz from './components/dashboard/Quiz'
import { ReloadOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import Warning from './Warning'

const DashBoard = () => {
    const [lessons, setLessons] = useState(null)
    const [quiz, setQuiz] = useState(null)
    const [name, setName] = useState('')
    const [progress, setProgress] = useState(0)
    const [isExpired, setIsExpired] = useState(false)
    const [isQuizDisable, setIsQuizDisable] = useState(true)
    const [isVideoDisable, setIsVideoDisable] = useState(true)

    const refreshPage = () => {
        window.location.reload()
    }

    useEffect(() => {
        const getData = async () => {
            const token = Cookies.get('token')
            const user = Cookies.get('user')
            const fullname = Cookies.get('fullname')

            setName(fullname)

            axios
                .post(`${process.env.REACT_APP_API_URL}lessons`, {
                    MEM_ID: user
                }, {
                    headers: {
                        APP_KEY: process.env.REACT_APP_APP_KEY,
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(async response => {
                    // console.log(response.data)
                    const { code, item, itemdetail, message } = await response.data

                    if (code === 10) {
                        const { lessons, quiz, COURSES_PROGRESS } = await item

                        if(quiz[0].IS_DONE === 2) {
                            setIsVideoDisable(false)
                        }

                        setLessons(lessons)
                        setQuiz(quiz)
                        setProgress(COURSES_PROGRESS)

                        if (+COURSES_PROGRESS >= 80) {
                            setIsQuizDisable(false)
                        }
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
                        quiz !== 0 && (
                            <Quiz
                                lesson={quiz[0]}
                            />
                        )
                    }

                    {
                        lessons?.map((element) => (
                            <Lesson
                                key={element.lesson_id}
                                lesson={element}
                                isVideoDisable={isVideoDisable}
                            />
                        ))
                    }

                    {
                        quiz !== 0 && (
                            <Quiz
                                lesson={quiz[1]}
                                isQuizDisable={isQuizDisable}
                            />
                        )
                    }
                </div>
            </Layout>
        )
    )
}

export default DashBoard
