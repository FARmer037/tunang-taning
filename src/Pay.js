import React, { useState, useEffect } from 'react'
import './styles/Pay.scss'
import Layout from './components/Layout'
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Space,
  Modal
} from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import LoadingPage from './LoadingPage'
import { getDate, searchBank } from './util'
import { useNavigate } from 'react-router-dom'
import Warning from './Warning'

const Pay = () => {
  const [value, setValue] = useState(null)
  const [slip, setSlip] = useState(null)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [memId, setMemId] = useState('')
  const [name, setName] = useState('')
  const [bankCode, setBankCode] = useState('')
  const [amount, setAmount] = useState('')
  const [payDate, setPayDate] = useState('')
  const [token, setToken] = useState('')
  const [isExpired, setIsExpired] = useState(false)

  const navigate = useNavigate()

  const success = () => {
    Modal.success({
      title: 'แจ้งชำระเงินสำเร็จ',
      content:
        'ระบบกำลังตรวจสอบการชำระเงินของคุณ และจะอัปเดทสถานะของคุณภายใน 24 ชม.',
      onOk () {
        navigate('/courses')
      }
    })
  }

  const error = message => {
    Modal.error({
      title: 'ไม่สำเร็จ',
      content: message
    })
  }

  const onChange = e => {
    const bank = searchBank(e.target.value)
    setBankCode(bank.bankCode)
    setValue(e.target.value)
  }

  const onSubmit = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}Pay`,
        {
          MEM_ID: memId,
          PAY_NAME: name,
          BANK_CODE: bankCode,
          AMOUNT: +amount,
          DATE: payDate,
          SLIP_PATH: slip
        },
        {
          headers: {
            APP_KEY: process.env.REACT_APP_APP_KEY,
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(async response => {
        console.log(response.data)

        const { code, item, itemdetail, message } = response.data

        if (code === 10) {
          success()
        } else {
          error(message)
        }

        Cookies.set('token', itemdetail)
      })
      .catch(err => {
        console.log(err.response.status)
        if (err.response.status === 401) {
          setIsExpired(true)
        }
      })
  }

  const onLoad = fileString => {
    const searchTerm = 'base64,'
    const indexOfFirst = fileString.indexOf(searchTerm)
    const firstIndex = indexOfFirst + 7
    const base64 = fileString.slice(firstIndex)

    setSlip(base64)
  }

  const onOk = value => {
    setPayDate(getDate(value))
  }

  const getBase64 = file => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      onLoad(reader.result)
    }
  }

  const onImageChange = e => {
    getBase64(e.target.files[0])
  }

  useEffect(() => {
    const getAccount = async () => {
      const user = Cookies.get('user')

      setMemId(user)

      const config = {
        headers: {
          APP_KEY: process.env.REACT_APP_APP_KEY
        }
      }
      axios
        .get(`${process.env.REACT_APP_API_URL}Pay`, config)
        .then(async response => {
          // console.log(response.data)
          const { code, item, itemdetail, message } = response.data

          if (code === 10) {
            setData(item)
            setIsLoading(false)
            setToken(itemdetail)

            Cookies.set('token', itemdetail)
          } else {
            alert(message)
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    getAccount()
  }, [])

  return isLoading ? (
    isExpired ? (
      <Warning />
    ) : (
      <LoadingPage />
    )
  ) : (
    <Layout>
      <div className='pay'>
        <div className='pay__channel'>
          <div className='pay__channel-title'>
            <img src={require('./images/logo.png')} alt='login' />
            <h1>ช่องทางการชำระ</h1>
          </div>

          {data.map((item, index) => (
            <div key={index} className='pay__channel-list'>
              <div>
                <img
                  src={require(`./images/banks/${
                    searchBank(item.bank_code).bankLogo
                  }`)}
                  alt=''
                />
                <h2>{searchBank(item.bank_code).bankName}</h2>
              </div>

              <h3>ชื่อบัญชี: {item.account_name}</h3>
              <h3>เลขที่บัญชี: {item.account_number}</h3>
            </div>
          ))}
        </div>
        <div className='pay__inform'>
          <div className='pay__inform-title'>
            <img src={require('./images/logo.png')} alt='login' />
            <h1>แจ้งชำระเงิน</h1>
          </div>

          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout='horizontal'
            style={{ maxWidth: 600, margin: '20px 0' }}
          >
            <Form.Item label='ชื่อผู้โอน'>
              <Input value={name} onChange={e => setName(e.target.value)} />
            </Form.Item>
            <Form.Item label='ธนาคารที่โอนเข้า'>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction='vertical'>
                  {data.map((item, index) => (
                    <Radio key={index} value={item.bank_code}>
                      {searchBank(item.bank_code).bankName}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item label='จำนวนเงินที่โอน'>
              <InputNumber
                value={amount}
                onChange={value => setAmount(value)}
              />
            </Form.Item>
            <Form.Item label='วันที่โอน'>
              <DatePicker showTime onOk={onOk} />
            </Form.Item>
            <Form.Item label='หลักฐานการโอน' valuePropName='fileList'>
              <input
                type='file'
                id='images'
                accept='image/*'
                onChange={onImageChange}
              />
            </Form.Item>
          </Form>
          <Button type='primary' onClick={onSubmit}>
            แจ้งชำระเงิน
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Pay
