import React, { useState } from 'react'
import '../../styles/Dashboard.scss'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const DashboardHeader = () => {
    const [isDone, setIsDone] = useState(true)

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

                    {
                        isDone ? (
                            <Link to='/certificate' target='_blank'>
                                <Button
                                    shape='round'
                                    type='primary'
                                    size='large'
                                    disabled={!isDone}
                                >
                                    เกียรติบัตร
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                shape='round'
                                type='primary'
                                size='large'
                                disabled={!isDone}
                            >
                                เกียรติบัตร
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
