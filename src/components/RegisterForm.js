import React from 'react'
import '../styles/Register.scss'
import { PlusOutlined } from '@ant-design/icons'
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    Col,
    Row
} from 'antd'

const { TextArea } = Input

const RegisterForm = ({ step }) => {
    return (
        <div className='register2__content-form'>
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
                        <Select.Option value='demo'>Demo</Select.Option>
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
                        <Select.Option value='demo'>Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label='สถานที่ให้ส่งเกียรติบัตร' className='wrap-label'>
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
}

export default RegisterForm
