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
  Upload
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

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

  const onChange = e => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
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
                    <Radio value={index + 1}>{item.bankName}</Radio>
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
              <Upload action='/upload.do' listType='picture-card'>
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </Form>
          <Button>แจ้งชำระเงิน</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Pay
