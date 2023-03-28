import React, { useState } from 'react'
import './styles/Register.scss'
import { PlusOutlined } from '@ant-design/icons'
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
} from 'antd'

const { TextArea } = Input

const Register = () => {
    return (
        <div className='register'>
            <div className='register__card'>
                <img src={require('./images/logo.png')} alt='login image' />
                <h1>ลงทะเบียน</h1>

                <div className='register__card-form'>
                    <div className='left'>
                        <Form
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout='horizontal'
                            style={{
                                width: '100%',
                            }}
                        >
                            <Form.Item label='ชื่อ-สกุล (ไทย)'>
                                <Input />
                            </Form.Item>

                            <Form.Item label='ชื่อ-สกุล (อาหรับ)'>
                                <Input />
                            </Form.Item>

                            <Form.Item label='เลขที่บัตรประชาชน'>
                                <Input />
                            </Form.Item>

                            <Form.Item label='เบอร์โทรศัพท์'>
                                <Input />
                            </Form.Item>

                            <Form.Item label='อีเมล'>
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

                    <div className='middle'>
                        <Form
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout='horizontal'
                            style={{
                                width: '100%',
                            }}
                        >
                            <Form.Item label='เพศ'>
                                <Input />
                            </Form.Item>

                            <Form.Item label='อาชีพ'>
                                <Select>
                                    <Select.Option value='demo'>Demo</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label='วันเดือนปีเกิด'>
                                <DatePicker />
                            </Form.Item>

                            <Form.Item label='อายุ'>
                                <InputNumber />
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

                    <div className='right'>
                        <Form
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout='horizontal'
                            style={{
                                width: '100%',
                            }}
                        >
                            <Form.Item label='ชื่อมัสยิดที่อยู่'>
                                <Input />
                            </Form.Item>

                            <Form.Item label='สังกัด คณะกรรมการอิสลามประจำจังหวัด' className='wrap-label'>
                                <Select>
                                    <Select.Option value='demo'>Demo</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label='สถานที่ให้ส่งเกียรติบัตร' className='wrap-label'>
                                <TextArea rows={4} />
                            </Form.Item>

                            <Form.Item>
                                <Button type='primary' className='register__button' >ลงทะเบียน</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
