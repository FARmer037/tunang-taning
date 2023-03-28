import React, { useState } from 'react'
import './styles/Register.scss'
import RegisterForm from './components/RegisterForm'
import { UnlockOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import { Steps, Progress, Button } from 'antd'

// status list
// 1. wait
// 2. process
// 3. finish

const Register2 = () => {
    const [step, setStep] = useState(1)

    return (
        <div className='register2'>
            <div className='register2__content'>
                <h2>ลงทะเบียนอมรมนิกะห์ออนไลน์</h2>
                <p>มีรายละเอียดทั้งหมด 4 หน้า</p>

                <div className='register2__content-step'>
                    <Steps
                        items={[
                            {
                                title: 'ข้อมูลส่วนตัว',
                                status: 'process',
                                icon: <UserOutlined />,
                            },
                            {
                                title: 'บัญชี',
                                status: 'wait',
                                icon: <SolutionOutlined />,
                            },
                            {
                                title: 'OTP',
                                status: 'wait',
                                icon: <UnlockOutlined />,
                            },
                            {
                                title: 'เสร็จสิ้น',
                                status: 'wait',
                                icon: <SmileOutlined />,
                            },
                        ]}
                    />

                    <Progress percent={20} showInfo={false} style={{ padding: 0, margin: 0 }} />
                </div>

                <div className='register2__content-title'>
                    <h2>ข้อมูลส่วนตัว</h2>
                    <p>Step 3 - 4</p>
                </div>

                <RegisterForm step={step} />

                <div className='register2__content-button'>
                    <Button type='primary'>ถัดไป</Button>
                </div>
            </div>
        </div>
    )
}

export default Register2
