import React, { useState, useContext, useEffect } from 'react'
import './styles/Register.scss'
import RegisterForm from './components/RegisterForm'
import {
  UnlockOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Steps, Progress, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ScoreContext } from './App'
import LoadingPage from './LoadingPage'
import axios from 'axios'
import Cookies from 'js-cookie'

const steps = [
  {
    id: 1,
    title: 'ข้อมูลส่วนตัว',
    status: 'process',
    icon: 'UserOutlined'
  },
  {
    id: 2,
    title: 'บัญชี',
    status: 'process',
    icon: 'UserOutlined'
  },
  {
    id: 3,
    title: 'OTP',
    status: 'process',
    icon: 'UserOutlined'
  },
  {
    id: 4,
    title: 'เสร็จสิ้น',
    status: 'process',
    icon: 'UserOutlined'
  }
]

const Register = () => {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [district, setDistrict] = useState(null)
  const [province, setProvince] = useState(null)
  const [ptitle, setPtitle] = useState(null)
  const [occupationList, setOccupationList] = useState(null)
  const [belong, setBelong] = useState(null)

  const [messageApi, contextHolder] = message.useMessage()

  const {
    belongTo,
    nameTitle,
    firstNameTH,
    lastNameTH,
    firstNameAR,
    lastNameAR,
    idCardNumber,
    idCardCopy,
    phoneNumber,
    mosqueName,
    birthDate,
    age,
    sex,
    email,
    occupation,
    sendingPlace,
    username,
    password,
    confirmPassword,
    otp,
    addNumber,
    addMoo,
    addThanon,
    addTambon,
    addAmphoe,
    addChangwat,
    addZipCode,
    sendNumber,
    setSendNumber,
    sendMoo,
    setSendMoo,
    sendThanon,
    setSendThanon,
    sendTambon,
    setSendTambon,
    sendAmphoe,
    setSendAmphoe,
    sendChangwat,
    setSendChangwat,
    sendZipCode,
    setSendZipCode
  } = useContext(ScoreContext)

  const navigate = useNavigate()

  const getStepTitle = id => {
    const step = steps.find(step => step.id === id)

    return step.title
  }

  const error = message => {
    messageApi.open({
      type: 'error',
      content: !message ? 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' : message
    })

    setIsLoading(false)
  }

  const onNextClick = () => {
    if (step === 1) {
      if (sendingPlace === 'same') {
        setSendNumber(addNumber)
        setSendMoo(addMoo)
        setSendThanon(addThanon)
        setSendTambon(addTambon)
        setSendAmphoe(addAmphoe)
        setSendChangwat(addChangwat)
        setSendZipCode(addZipCode)
      }

      if (
        !sex ||
        !nameTitle ||
        !occupation ||
        !birthDate ||
        firstNameTH === '' ||
        lastNameTH === '' ||
        firstNameAR === '' ||
        firstNameAR === '' ||
        idCardNumber === '' ||
        phoneNumber === '' ||
        mosqueName === '' ||
        addNumber === '' ||
        addTambon === '' ||
        addThanon === '' ||
        addAmphoe === '' ||
        addChangwat === '' ||
        addZipCode === '' ||
        lastNameTH === ''
      ) {
        error('กรุณากรอกข้อมูลให้ครบถ้วน')
      } else {
        setStep(step + 1)
      }
    } else if (step === 2) {
      if (username === '' || password === '' || confirmPassword === '') {
        error('กรุณากรอกข้อมูลให้ครบถ้วน')
      } else if (password !== confirmPassword) {
        error('รหัสผ่านไม่ตรงกัน!')
      } else {
        axios
          .post(
            `${process.env.REACT_APP_API_URL}Register`,
            {
              USER_NAME: username,
              PASSWORD: password,
              PASSWORD_CONFIRM: confirmPassword,
              PTITLE_ID: nameTitle,
              F_NAME_TH: firstNameTH,
              L_NAME_TH: lastNameTH,
              F_NAME_EN: firstNameAR,
              L_NAME_EN: lastNameAR,
              ID_CARD_NO: idCardNumber,
              PHONE_NO: phoneNumber,
              MOSQUE_NAME: mosqueName,
              BIRTHDATE: birthDate,
              SEX: sex,
              ADDRESS: addNumber,
              MOO_ADDR: addMoo,
              TUMBOL: addTambon,
              TANON: addThanon,
              DISTRICT_ID: addAmphoe,
              PROVINCE_ID: addChangwat,
              ZIP_CODE: addZipCode,
              EMAIL: email,
              OCCUPATION_ID: occupation,
              SENDING_PLACE: 'same',
              ID_CARD_IMAGE: idCardCopy
            },
            {
              headers: {
                Authorization: `App ${process.env.REACT_APP_AUTHORIZATION}`,
                APP_KEY: process.env.REACT_APP_APP_KEY
              }
            }
          )
          .then(async response => {
            // console.log(response.data)

            const { code, item, itemdetail, message } = response.data

            if (code === 10) {
              // Cookies.set('user', item.MEM_ID, { expires: 1 })
              Cookies.set('token', itemdetail)

              setStep(step + 1)
            } else {
              error(message)
            }
          })
          .catch(err => console.log(err))
      }
    } else if (step === 3) {
      console.log('otp', otp)
      //  otp verify here!

      setStep(step + 1)
    }
  }

  const delay = t => {
    return new Promise(resolve => setTimeout(resolve, t))
  }

  useEffect(() => {
    const getData = async () => {
      const results = []
      const strings = [
        'GetDistrict',
        'GetProvince',
        'GetPtitle',
        'GetOccupation',
        'GETBelong'
      ]

      const config = {
        headers: {
          APP_KEY: process.env.REACT_APP_APP_KEY
        }
      }

      for (let str of strings) {
        await delay(250)
        let data = await axios.get(
          `${process.env.REACT_APP_API_URL}${str}`,
          config
        )
        results.push(data)
      }

      return results
    }

    getData()
      .then(async results => {
        const districts = await results[0].data.item
        const provinces = await results[1].data.item
        const ptitle = await results[2].data.item
        const occupation = await results[3].data.item
        const belong = await results[4].data.item

        setDistrict(districts)
        setProvince(provinces)
        setPtitle(ptitle)
        setOccupationList(occupation)
        setBelong(belong)

        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className='register'>
      {contextHolder}
      <div className='register__content'>
        <img src={require('./images/logo.png')} alt='login' />

        <h2>ลงทะเบียนอมรมนิกะห์ออนไลน์</h2>
        <p>มีรายละเอียดทั้งหมด 4 หน้า</p>

        <div className='register__content-step'>
          <Steps
            items={[
              {
                title: 'ข้อมูลส่วนตัว',
                status: step === 1 ? 'process' : 'finish',
                icon: <UserOutlined />
              },
              {
                title: 'บัญชี',
                status: step === 2 ? 'process' : step > 2 ? 'finish' : 'wait',
                icon: <SolutionOutlined />
              },
              {
                title: 'OTP',
                status: step === 3 ? 'process' : step > 2 ? 'finish' : 'wait',
                icon: <UnlockOutlined />
              },
              {
                title: 'เสร็จสิ้น',
                status: step === 4 ? 'finish' : 'wait',
                icon: <SmileOutlined />
              }
            ]}
          />

          <Progress
            percent={(step * 100) / 4}
            showInfo={false}
            style={{ padding: 0, margin: 0 }}
          />
        </div>

        <div className='register__content-title'>
          <h2>{getStepTitle(step)}</h2>
          <p>Step {step} - 4</p>
        </div>

        <RegisterForm
          step={step}
          district={district}
          province={province}
          ptitle={ptitle}
          occupationList={occupationList}
          belong={belong}
        />

        <div className='register__content-button'>
          {step !== 1 && step !== 4 && (
            <Button
              style={{ marginRight: 20 }}
              onClick={() => setStep(step - 1)}
            >
              ย้อนกลับ
            </Button>
          )}

          {step === 4 ? (
            <Button
              type='primary'
              onClick={() => navigate('/login')}
              style={{ marginTop: 26 }}
            >
              เข้าสู่ระบบ
            </Button>
          ) : (
            <Button type='primary' onClick={onNextClick}>
              ถัดไป
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register
