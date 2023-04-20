import React, { useState, useContext } from 'react'
import './styles/Register.scss'
import RegisterForm from './components/RegisterForm'
import { UnlockOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import { Steps, Progress, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ScoreContext } from './App'

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

    const {
        belongTo,
        firstNameTH,
        lastNameTH,
        firstNameEN,
        lastNameEN,
        idCardNumber,
        idCardCopy,
        phoneNumber,
        mosqueAdress,
        birthDate,
        age,
        sex,
        address,
        email,
        occupation,
        sendingPlace,
        username,
        password,
        confirmPassword,
        otp,
    } = useContext(ScoreContext)

    const navigate = useNavigate()

    const getStepTitle = (id) => {
        const step = steps.find(step => step.id === id)

        return step.title
    }

    const onNextClick = () => {
        // console.log('belongTo -> ', belongTo)
        // console.log('firstNameTH -> ', firstNameTH)
        // console.log('lastNameTH -> ', lastNameTH)
        // console.log('firstNameEN -> ', firstNameEN)
        // console.log('lastNameEN -> ', lastNameEN)
        // console.log('idCardNumber -> ', idCardNumber)
        // console.log('idCardCopy -> ', idCardCopy)
        // console.log('phoneNumber -> ', phoneNumber)
        // console.log('mosqueAdress -> ', mosqueAdress)
        // console.log('birthDate -> ', birthDate)
        // console.log('age -> ', age)
        // console.log('sex -> ', sex)
        // console.log('email -> ', email)
        // console.log('occupation -> ', occupation)
        // console.log('sendingPlace -> ', sendingPlace)
        
        // console.log('username -> ', username)
        // console.log('password -> ', password)
        // console.log('confirmPassword -> ', confirmPassword)

        // console.log('step', step)

        if(step === 3) {
            console.log('otp', otp)
            //  otp verify here!

            //  If the otp code is verified successfully, save the information to the database.
        }
        
        setStep(step + 1)
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
                                onClick={() => navigate('/login')}
                                style={{ marginTop: 26 }}
                            >
                                เข้าสู่ระบบ
                            </Button>
                        ) : (
                            <Button
                                type='primary'
                                onClick={onNextClick}
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
