import React, { useState } from 'react'
import '../styles/Register.scss'
import { PlusOutlined } from '@ant-design/icons'
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    Col,
    Row
} from 'antd'
import OtpInput from 'react-otp-input'
import SuccessIcon from '../images/success.png'
 
const { TextArea } = Input

const RegisterForm = ({ step }) => {
    const [otp, setOtp] = useState('')

    switch (step) {
        case 1:
            return (
                <div className='register__content-form'>
                    <Form
                        labelWrap
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        layout='horizontal'
                        style={{
                            width: '100%',
                        }}
                    >
                        <Form.Item label='สังกัด คณะกรรมการอิสลามประจำจังหวัด'>
                            <Select>
                                <Select.Option value='demo1'>Demo</Select.Option>
                                <Select.Option value='demo2'>Demo</Select.Option>
                                <Select.Option value='demo3'>Demo</Select.Option>
                                <Select.Option value='demo4'>Demo</Select.Option>
                                <Select.Option value='demo5'>Demo</Select.Option>
                                <Select.Option value='demo6'>Demo</Select.Option>
                            </Select>
                        </Form.Item>

                        <Row>
                            <Col span={12} style={{ paddingRight: 10 }}>
                                <Form.Item label='ชื่อ (ภาษาไทย)'>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ paddingLeft: 10 }}>
                                <Form.Item label='นามสกุล (ภาษาไทย)'>
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12} style={{ paddingRight: 10 }}>
                                <Form.Item label='ชื่อ (ภาษาอังกฤษ)'>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ paddingLeft: 10 }}>
                                <Form.Item label='นามสกุล (ภาษาอังกฤษ)'>
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item label='เลขที่บัตรประชาชน'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='เบอร์โทรศัพท์'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='ชื่อมัสยิดที่อยู่'>
                            <Input />
                        </Form.Item>

                        <Row>
                            <Col span={8} style={{ paddingRight: 10 }}>
                                <Form.Item label='วันเดือนปีเกิด'>
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                            <Col span={8} style={{ paddingLeft: 10 }}>
                                <Form.Item label='อายุ'>
                                    <InputNumber />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item label='เพศ'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='อีเมล'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='อาชีพ'>
                            <Select>
                                <Select.Option value='demo1'>Demo</Select.Option>
                                <Select.Option value='demo2'>Demo</Select.Option>
                                <Select.Option value='demo3'>Demo</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label='สถานที่ส่งเกียรติบัตรอบรม' className='wrap-label'>
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item label='สำเนาบัตรประชาชน' valuePropName='fileList'>
                            <Upload action='/upload.do' listType='picture-card'>
                                <div>
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Form>
                </div>
            )

        case 2:
            return (
                <div className='register__content-form'>
                    <Form
                        labelWrap
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        layout='horizontal'
                        style={{
                            width: '100%',
                        }}
                    >
                        <Form.Item label='ชื่อผู้ใช้'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='รหัสผ่าน'>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label='ยืนยันรหัสผ่าน'>
                            <Input.Password />
                        </Form.Item>
                    </Form>
                </div>
            )

        case 3:
            return (
                <div className='register__content-form'>
                    <p>ใส่รหัส OTP 6 หลัก</p>
                    <h3>SMS จะส่งไปยังเบอร์โทรศัพท์ ******8356</h3>

                    <div className='otp-input'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span> - </span>}
                            inputStyle={{ marginRight: 4, marginLeft: 4, width: 26, padding: 4, borderRadius: 6, borderWidth: 1 }}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>

                    <p>รหัสอ้างอิง:UERT2567</p>
                </div>
            )

        case 4:
            return (
                <div className='register__content-form'>
                    <img src={SuccessIcon} alt='success-icon' />
                    <h2>ลงทะเบียนสำเร็จ</h2>
                </div>
            )

        default: return <></>
    }
}

export default RegisterForm
