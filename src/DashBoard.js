import React from 'react'
import Layout from './components/Layout'
import DashboardHeader from './components/dashboard/DashboardHeader'
import './styles/Dashboard.scss'
import Lesson from './components/dashboard/Lesson'
import { lessons } from './Lessons'
import { ReloadOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

const DashBoard = () => {
    const refreshPage = () => {
        window.location.reload()
    }

    return (
        <Layout>
            <DashboardHeader />

            <div className='dashboard'>
                <div className='dashboard__top'>
                    <p>Learning Path</p>

                    <Tooltip title='รีเฟรช'>
                        <Button icon={<ReloadOutlined />} onClick={() => refreshPage()} />
                    </Tooltip>
                </div>

                {
                    lessons.map((element) => (
                        <Lesson
                            key={element.lesson_id}
                            lesson={element}
                            allLesson={lessons}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default DashBoard
