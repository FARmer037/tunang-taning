import React, { useState } from 'react'
import '../../styles/Dashboard.scss'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const DashboardHeader = ({ name, progress }) => {
    return (
        <div className='dashboardheader'>
            <div className='dashboardheader__coueses'>
                <h1>อบรมนิกะห์ออนไลน์</h1>
                <p>ผศ.ดร.อิสมาอีล ราโอบ</p>
            </div>

            <div className='dashboardheader__progress'>
                <div className='dashboardheader__progress-detail'>
                    <p>Course Progress:</p>
                    <h1>{progress}<span>%</span></h1>
                </div>
                <div className='dashboardheader__progress-name'>
                    <h2>{name}</h2>

                    {
                        progress > 80 ? (
                            <Link to='/certificate' target='_blank'>
                                <Button
                                    shape='round'
                                    type='primary'
                                    size='large'
                                >
                                    เกียรติบัตร
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                shape='round'
                                type='primary'
                                size='large'
                                disabled
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
