import React, { useState } from 'react'
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
} from 'antd'

const data = [
  {
    bankName: 'ธนาคารกรุงเทพ',
    accountName: 'บริษัท ตูนังตานิง จำกัด',
    bankIcon: 'bbl.png',
    accountNumber: '111-1-11111-1',
    branchName: 'ระยอง'
  },
  {
    bankName: 'ธนาคารไทยพาณิชย์',
    accountName: 'บริษัท ตูนังตานิง จำกัด',
    bankIcon: 'scb.png',
    accountNumber: '111-111111-1',
    branchName: 'ระยอง'
  },
  {
    bankName: 'ธนาคารทหารไทยธนชาต',
    accountName: 'บริษัท ตูนังตานิง จำกัด',
    bankIcon: 'ttb.png',
    accountNumber: '111-1-11111-1',
    branchName: 'ระยอง'
  }
]

const Pay = () => {
  const [value, setValue] = useState(null)
  const [slip, setSlip] = useState(null)

  const onChange = e => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const onLoad = (fileString) => {
    const searchTerm = 'base64,'
    const indexOfFirst = fileString.indexOf(searchTerm)
    const firstIndex = indexOfFirst + 7
    const base64 = fileString.slice(firstIndex)

    setSlip(base64)
    console.log(base64)
  }

  const getBase64 = file => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      onLoad(reader.result)
    }
  }

  const onImageChange = (e) => {
    getBase64(e.target.files[0])
  }

  return (
    <Layout>
      <div className='pay'>
        <div className='pay__channel'>
          {data.map((item, index) => (
            <div key={index} className='pay__channel-list'>
              <div>
                <img src={require(`./images/banks/${item.bankIcon}`)} alt='' />
                <h1>{item.bankName}</h1>
              </div>

              <h3>ชื่อบัญชี: {item.accountName}</h3>
              <h3>เลขที่บัญชี: {item.accountNumber}</h3>
              <h3>สาขา: {item.branchName}</h3>
            </div>
          ))}
        </div>
        <div className='pay__inform'>
          <h1>แจ้งชำระเงิน</h1>
          <Form
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 14
            }}
            layout='horizontal'
            style={{
              maxWidth: 600
            }}
          >
            <Form.Item label='ชื่อผู้โอน'>
              <Input />
            </Form.Item>
            <Form.Item label='ธนาคารที่โอนเข้า'>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction='vertical'>
                  {data.map((item, index) => (
                    <Radio key={index} value={index + 1}>{item.bankName}</Radio>
                  ))}
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item label='จำนวนเงินที่โอน'>
              <InputNumber />
            </Form.Item>
            <Form.Item label='วันที่โอน'>
              <DatePicker />
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
          <Button type='primary'>แจ้งชำระเงิน</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Pay
