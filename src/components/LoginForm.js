import React, { useState } from 'react'
import '../login.scss'
import { Input, Button, Checkbox, message, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  const [isRemember, setIsRemember] = useState(true)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const [messageApi, contextHolder] = message.useMessage()

  const navigate = useNavigate()

  const onChange = () => {
    setIsRemember(!isRemember)
  }

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'invalid username or password',
    });
  };

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_API_URL}Login`, {
      USER: username,
      PASSWORD: password
    }, {
      headers: {
        Authorization: `App ${process.env.REACT_APP_AUTHORIZATION}`,
        APP_KEY: process.env.REACT_APP_APP_KEY
      }
    })
      .then(response => {
        // console.log(response.data)

        const { code } = response.data

        if (code === 10) {
          navigate('/courses')
        } else {
          error()
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='login__card-form'>
      {contextHolder}
      <img src={require('../images/logo.png')} alt='login image' />
      <h2>ยินดีต้อนรับ</h2>

      <div className='login__card-input'>
        <h5>Username or Email</h5>

        <Input
          style={{ marginBottom: 20 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h5>Password</h5>
        <Input.Password
          style={{ marginBottom: 20 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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

      <Button type='primary' size='large' onClick={onSubmit}>
        เข้าสู่ระบบ
      </Button>

      <p>
        ยังไม่ได้เป็นสมาชิก <a href='/#'>สมัครเลย!</a>
      </p>
    </div>
  )
}

export default LoginForm
