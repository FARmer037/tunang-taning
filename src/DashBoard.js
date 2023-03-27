import React from 'react'
import Layout from './components/Layout'
import DashboardHeader from './components/dashboard/DashboardHeader'
import './styles/Dashboard.scss'
import Lesson from './components/dashboard/Lesson'
import { lessons } from './Lessons'

const DashBoard = () => {
    return (
        <Layout>
            <DashboardHeader />

            <div className='dashboard'>
                <p>Learning Path</p>

                {
                    lessons.map((element) => (
                        <Lesson
                            key={element.id}
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
