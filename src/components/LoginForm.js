import React, { useState } from 'react'
import '../login.scss'
import { Input, Button, Checkbox, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

const LoginForm = () => {
  const [isRemember, setIsRemember] = useState(true)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const navigate = useNavigate()

  const onChange = () => {
    setIsRemember(!isRemember)
  }

  const error = message => {
    messageApi.open({
      type: 'error',
      content: !message ? 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' : message
    })

    setIsLoading(false)
  }

  const onSubmit = () => {
    setIsLoading(true)

    if (!username || !password) {
      error()
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}Login`,
          {
            USER_NAME: username,
            PASSWORD: password
          },
          {
            headers: {
              Authorization: `App ${process.env.REACT_APP_AUTHORIZATION}`,
              APP_KEY: process.env.REACT_APP_APP_KEY
            }
          }
        )
        .then(response => {
          // console.log(response.data)

          const { code, itemdetail, item, message } = response.data

          if (code === 10) {
            if (item.ROLE_ID === '3') {
              window.location.href = `${process.env.REACT_APP_ADMIN_URL}?id=${username}`
            } else {
              Cookies.set('user', item.MEM_ID, { expires: 1 })
              Cookies.set('fullname', item.USER_NAME)
              Cookies.set('confirm', item.CONFIRM_STATUS)
              Cookies.set('token', itemdetail)

              navigate('/courses')

              setIsLoading(false)
            }
          } else {
            error(message)
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='login__card-form'>
      {contextHolder}
      <img src={require('../images/logo.png')} alt='login' />
      <h2>ยินดีต้อนรับ</h2>

      <div className='login__card-input'>
        <h5>Username or Email</h5>

        <Input
          style={{ marginBottom: 20 }}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <h5>Password</h5>
        <Input.Password
          style={{ marginBottom: 20 }}
          value={password}
          onChange={e => setPassword(e.target.value)}
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

      {isLoading ? (
        <Button type='primary' loading>
          Loading
        </Button>
      ) : (
        <Button type='primary' size='large' onClick={onSubmit}>
          เข้าสู่ระบบ
        </Button>
      )}

      <p>
        ยังไม่ได้เป็นสมาชิก <Link to='/register'>สมัครเลย!</Link>
      </p>
    </div>
  )
}

export default LoginForm
