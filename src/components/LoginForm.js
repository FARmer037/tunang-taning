import React, { useState } from 'react'
import '../login.scss'
import { Input, Button, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [isRemember, setIsRemember] = useState(true)

  const navigate = useNavigate()

  const onChange = () => {
    setIsRemember(!isRemember)
  }

  return (
    <div className='login__card-form'>
      <img src={require('../images/logo.png')} alt='login image' />
      <h2>ยินดีต้อนรับ</h2>

      <div className='login__card-input'>
        <h5>Username or Email</h5>
        <Input style={{ marginBottom: 20 }} />
        <h5>Password</h5>
        <Input.Password style={{ marginBottom: 20 }} />

        <div className='login__card-forgotbox'>
          <Checkbox
            checked={isRemember}
            onChange={onChange}
            style={{ color: '#555' }}
          >
            จดจำบัญชีนี้
          </Checkbox>

          <a href='/#'>ลืมรหัสผ่าน?</a>
        </div>
      </div>

      <Button type='primary' size='large' onClick={() => navigate('/courses')}>
        เข้าสู่ระบบ
      </Button>

      <p>
        ยังไม่ได้เป็นสมาชิก <a href='/#'>สมัครเลย!</a>
      </p>
    </div>
  )
}

export default LoginForm
