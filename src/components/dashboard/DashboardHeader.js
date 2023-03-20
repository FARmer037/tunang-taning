import React, { useState } from 'react'
import '../../styles/Dashboard.scss'

const DashboardHeader = () => {
    const [isDone, setIsDone] = useState(false)

    return (
        <div className='dashboardheader'>
            <div className='dashboardheader__coueses'>
                <h1>อบรมนิกะห์ออนไลน์</h1>
                <p>ผศ.ดร.อิสมาอีล ราโอบ</p>
            </div>

            <div className='dashboardheader__progress'>
                <div className='dashboardheader__progress-detail'>
                    <p>Course Progress:</p>
                    <h1>21.6<span>%</span></h1>
                </div>
                <div className='dashboardheader__progress-name'>
                    <h2>Mustofa Sachi</h2>

                    <button className={!isDone && 'disable-button'}>เกียรติบัตร</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
