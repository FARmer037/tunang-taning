import React, { useState } from 'react'
import '../login.scss'
import { Input, Button, Checkbox, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
// import { useStateValue } from '../StateProvider'
// import { actionType } from '../reducers/userReducer'
// import { useSignIn } from 'react-auth-kit'

const LoginForm = () => {
  // const [{ user }, dispatch] = useStateValue()

  const [isRemember, setIsRemember] = useState(true)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const navigate = useNavigate()

  // const signIn = useSignIn()

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
    setIsLoading(true)

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

        const { code, itemdetail, item } = response.data

        // dispatch({
        //   type: actionType.SET_USER,
        //   user: item[0]
        // })

        // signIn({
        //   token: itemdetail,
        //   expiresIn: 3600,
        //   tokenType: 'Bearer',
        //   authState: { user: username }
        // })

        if (code === 10) {
          Cookies.set('user', item[0].USER_NAME, { expires: 1 })
          Cookies.set('token', itemdetail)

          navigate('/courses')

          setIsLoading(false)

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

      {
        isLoading ? (
          <Button type="primary" loading>
            Loading
          </Button>
        ) : (
          <Button type='primary' size='large' onClick={onSubmit}>
            เข้าสู่ระบบ
          </Button>
        )
      }

      <p>
        ยังไม่ได้เป็นสมาชิก <Link to='/register'>สมัครเลย!</Link>
      </p>
    </div>
  )
}

export default LoginForm
