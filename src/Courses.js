import React, { useState } from 'react'
import Layout from './components/Layout'
import Banner from './components/courses/Banner'
import Descriptions from './components/courses/Descriptions'
import Lecturer from './components/courses/Lecturer'
import { Alert, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
  const [isPay, setIsPay] = useState(true)
  const navigate = useNavigate()

  return (
    <Layout>
      <Banner />

      {!isPay && (
        <Alert
          message='คุณยังไม่ได้ชำระเงินค่าสมัครอบรบ กรุณาชำระเงินก่อนเข้าอบรบ'
          type='error'
          className='alert'
          action={
            <Button size='small' danger onClick={() => navigate('/pay')}>
              ชำระเงิน
            </Button>
          }
        />
      )}

      <Descriptions />

      <Lecturer />
    </Layout>
  )
}

export default Courses
