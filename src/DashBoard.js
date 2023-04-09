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

const DashBoard = () => {
    const [lessons, setLessons] = useState(null)
    const [quiz, setQuiz] = useState(null)
    const [name, setName] = useState('')
    const [progress, setProgress] = useState(0)
    const [isExpired, setIsExpired] = useState(false)

    const refreshPage = () => {
        window.location.reload()
    }

    useEffect(() => {
        const getData = async () => {
            const token = Cookies.get('token')
            const user = Cookies.get('user')

            axios
                .post(`${process.env.REACT_APP_API_URL}/lessons`, {
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
