import React, { useState } from 'react'
import './styles/Register.scss'
import RegisterForm from './components/RegisterForm'
import { UnlockOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import { Steps, Progress, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

// status list
// 1. wait
// 2. process
// 3. finish

const steps = [
    {
        id: 1,
        title: 'ข้อมูลส่วนตัว',
        status: 'process',
        icon: 'UserOutlined',
    },
    {
        id: 2,
        title: 'บัญชี',
        status: 'process',
        icon: 'UserOutlined',
    },
    {
        id: 3,
        title: 'OTP',
        status: 'process',
        icon: 'UserOutlined',
    },
    {
        id: 4,
        title: 'เสร็จสิ้น',
        status: 'process',
        icon: 'UserOutlined',
    },
]

const Register = () => {
    const [step, setStep] = useState(1)

    const navigate = useNavigate()

    const getStepTitle = (id) => {
        const step = steps.find(step => step.id === id)

        return step.title
    }

    return (
        <div className='register'>
            <div className='register__content'>
                <img src={require('./images/logo.png')} alt='login image' />

                <h2>ลงทะเบียนอมรมนิกะห์ออนไลน์</h2>
                <p>มีรายละเอียดทั้งหมด 4 หน้า</p>

                <div className='register__content-step'>
                    <Steps
                        items={[
                            {
                                title: 'ข้อมูลส่วนตัว',
                                status: step === 1 ? 'process' : 'finish',
                                icon: <UserOutlined />,
                            },
                            {
                                title: 'บัญชี',
                                status: step === 2 ? 'process' : step > 2 ? 'finish' : 'wait',
                                icon: <SolutionOutlined />,
                            },
                            {
                                title: 'OTP',
                                status: step === 3 ? 'process' : step > 2 ? 'finish' : 'wait',
                                icon: <UnlockOutlined />,
                            },
                            {
                                title: 'เสร็จสิ้น',
                                status: step === 4 ? 'finish' : 'wait',
                                icon: <SmileOutlined />,
                            },
                        ]}
                    />

                    <Progress percent={step * 100 / 4} showInfo={false} style={{ padding: 0, margin: 0 }} />
                </div>

                <div className='register__content-title'>
                    <h2>{getStepTitle(step)}</h2>
                    <p>Step {step} - 4</p>
                </div>

                <RegisterForm step={step} />

                <div className='register__content-button'>
                    {
                        step !== 1 && step !== 4 && (
                            <Button
                                style={{ marginRight: 20 }}
                                onClick={() => setStep(step - 1)}
                            >
                                ย้อนกลับ
                            </Button>
                        )
                    }

                    {
                        step === 4 ? (
                            <Button
                                type='primary'
                                onClick={() => navigate('/')}
                                style={{ marginTop: 26 }}
                            >
                                เข้าสู่ระบบ
                            </Button>
                        ) : (
                            <Button
                                type='primary'
                                onClick={() => setStep(step + 1)}
                            >
                                ถัดไป
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Register
