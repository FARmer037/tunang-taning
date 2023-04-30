import React, { useContext } from 'react'
import '../styles/Register.scss'
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Col,
    Row,
    Radio,
} from 'antd'
import OtpInput from 'react-otp-input'
import SuccessIcon from '../images/success.png'
import { ScoreContext } from '../App'

const { TextArea } = Input

const RegisterForm = ({ step }) => {
    const {
        belongTo, setBelongTo,
        firstNameTH, setFirstNameTH,
        lastNameTH, setLastNameTH,
        firstNameAR, setFirstNameAR,
        lastNameAR, setLastNameAR,
        idCardNumber, setidCardNumber,
        idCardCopy, setIdCardCopy,
        phoneNumber, setPhoneNumber,
        mosqueAdress, setMosqueAddress,
        birthDateShow, setBirthDateShow,
        birthDate, setBirthDate,
        age, setAge,
        sex, setSex,
        address, setAddress,
        email, setEmail,
        occupation, setOccupation,
        sendingPlace, setSendingPlace,
        username, setUsername,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        otp, setOtp
    } = useContext(ScoreContext)

    const handleDateStartChange = (newValue) => {
        const date = new Date()

        setBirthDateShow(newValue)

        let difference = date.getTime() - (newValue.$d).getTime()
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))
        let years = (Math.round(TotalDays / 365))

        let day = newValue.$D
        let month = newValue.$M + 1
        let year = newValue.$y

        let dateFormat = `${year}/${month}/${day}`

        console.log(dateFormat)

        setBirthDate(dateFormat)
        setAge(years)
    }

    const onLoad = (fileString) => {
        const searchTerm = 'base64,'
        const indexOfFirst = fileString.indexOf(searchTerm)
        const firstIndex = indexOfFirst + 7
        const base64 = fileString.slice(firstIndex)

        setIdCardCopy(base64)
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
                            <Select value={belongTo} onSelect={(value) => setBelongTo(value)}>
                                <Select.Option value='demo1'>Demo1</Select.Option>
                                <Select.Option value='demo2'>Demo2</Select.Option>
                                <Select.Option value='demo3'>Demo3</Select.Option>
                                <Select.Option value='demo4'>Demo4</Select.Option>
                                <Select.Option value='demo5'>Demo5</Select.Option>
                                <Select.Option value='demo6'>Demo6</Select.Option>
                            </Select>
                        </Form.Item>

                        <Row>
                            <Col span={12} style={{ paddingRight: 10 }}>
                                <Form.Item label='ชื่อ (ภาษาไทย)'>
                                    <Input value={firstNameTH} onChange={e => setFirstNameTH(e.target.value)} />
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ paddingLeft: 10 }}>
                                <Form.Item label='นามสกุล (ภาษาไทย)'>
                                    <Input value={lastNameTH} onChange={e => setLastNameTH(e.target.value)} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12} style={{ paddingRight: 10 }}>
                                <Form.Item label='ชื่อ (ภาษาอาหรับ)'>
                                    <Input value={firstNameAR} onChange={e => setFirstNameAR(e.target.value)} />
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ paddingLeft: 10 }}>
                                <Form.Item label='นามสกุล (ภาษาอาหรับ)'>
                                    <Input value={lastNameAR} onChange={e => setLastNameAR(e.target.value)} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item label='เลขที่บัตรประชาชน'>
                            <Input value={idCardNumber} onChange={e => setidCardNumber(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='เบอร์โทรศัพท์'>
                            <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                        </Form.Item>

                        <Row>
                            <Col span={8} style={{ paddingRight: 10 }}>
                                <Form.Item label='วันเดือนปีเกิด'>
                                    <DatePicker value={birthDateShow} onChange={handleDateStartChange} />
                                </Form.Item>
                            </Col>
                            <Col span={8} style={{ paddingLeft: 10 }}>
                                <Form.Item label='อายุ'>
                                    <InputNumber disabled={true} value={age} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item label='เพศ'>
                            <Radio.Group value={sex} onChange={e => setSex(e.target.value)}>
                                <Radio value='male'> ชาย </Radio>
                                <Radio value='female'> หญิง </Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label='ที่อยู่' className='wrap-label'>
                            <TextArea rows={4} value={address} onChange={e => setAddress(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='อีเมล'>
                            <Input value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='อาชีพ'>
                            <Select value={occupation} onSelect={(value) => setOccupation(value)}>
                                <Select.Option value='demo1'>Demo1</Select.Option>
                                <Select.Option value='demo2'>Demo2</Select.Option>
                                <Select.Option value='demo3'>Demo3</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label='ชื่อมัสยิดที่อยู่'>
                            <Input value={mosqueAdress} onChange={e => setMosqueAddress(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='สถานที่ส่งเกียรติบัตรอบรม' className='wrap-label'>
                            <TextArea rows={4} value={sendingPlace} onChange={e => setSendingPlace(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='สำเนาบัตรประชาชน' valuePropName='fileList'>
                            <input
                                type='file'
                                id='images'
                                accept='image/*'
                                onChange={onImageChange}
                            />
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
                            <Input value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='รหัสผ่าน'>
                            <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item label='ยืนยันรหัสผ่าน'>
                            <Input.Password value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
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
