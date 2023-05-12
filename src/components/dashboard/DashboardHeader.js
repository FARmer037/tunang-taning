import React from 'react'
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
                            <div className='dashboardheader__progress-button'>
                                <Link to='/certificate' target='_blank'>
                                    <Button
                                        shape='round'
                                        type='primary'
                                        size='large'
                                        style={{ marginRight: 14 }}
                                    >
                                        เกียรติบัตร
                                    </Button>
                                </Link>
                                <Link to='/' target='_blank'>
                                    <Button
                                        shape='round'
                                        type='primary'
                                        size='large'
                                        style={{ background: '#c79274' }}
                                    >
                                        แบบประเมิน
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className='dashboardheader__progress-button'>
                                <Button
                                    shape='round'
                                    type='primary'
                                    size='large'
                                    style={{ marginRight: 14 }}
                                    disabled
                                >
                                    เกียรติบัตร
                                </Button>
                                <Button
                                    shape='round'
                                    type='primary'
                                    size='large'
                                    disabled
                                >
                                    แบบประเมิน
                                </Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
