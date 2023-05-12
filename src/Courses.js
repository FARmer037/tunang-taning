import React, { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Banner from './components/courses/Banner'
import Descriptions from './components/courses/Descriptions'
import Lecturer from './components/courses/Lecturer'
import { Alert, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import Warning from './Warning'
import LoadingPage from './LoadingPage'
// import { createServer } from 'miragejs'

// createServer({
//   routes() {
//     this.post("/api/courses", () => {
//       return {
//         code: 10,
//         item: {
//           ACCOUNT_ID: 1,
//           MEM_ID: "00001",
//           USER_NAME: "นายอนิรุตย์  ขุนราม",
//           REGISTER_DATE: "25/03/66 00:00",
//           CONFIRM_STATUS: "2",
//           CONFIRM_DATE: "25/03/66",
//           VIDEO_URL: 'https://www.youtube.com/watch?v=d0qVXvjV8LM',
//         },
//         itemdetail: 'token',
//         message: 'Invalid user!'
//       }
//     })
//   }
// })

const Courses = () => {
  const lecturer = 'ผศ.ดร.อิสมาอีล ราโอบ'

  const [videoUrl, setVideoUrl] = useState('')
  const [status, setStatus] = useState(0)
  const [isLoading, setIsloading] = useState(true)
  const [isExpired, setIsExpired] = useState(false)

  const navigate = useNavigate()

  const [messageApi, contextHolder] = message.useMessage()

  const error = (message) => {
    messageApi.open({
      type: 'error',
      content: message,
    })
  }

  useEffect(() => {
    const getData = async () => {
      const token = Cookies.get('token')
      const user = Cookies.get('user')

      // axios
      //   .post(`${process.env.REACT_APP_API_URL}/courses`, {
      //     USER_NAME: user
      //   }, {
      //     headers: {
      //       APP_KEY: process.env.REACT_APP_APP_KEY,
      //       Authorization: `Bearer ${token}`
      //     }
      //   })
      //   .then(async response => {
      //     const { code, item, itemdetail, message } = await response.data

      //     if (code === 10) {
      //       const { ACCOUNT_ID, MEM_ID, USER_NAME, REGISTER_DATE, CONFIRM_DATE, CONFIRM_STATUS, VIDEO_URL } = item

      //       setVideoUrl(VIDEO_URL)
      //       setStatus(CONFIRM_STATUS)
      //       setIsloading(false)
      //     }

      //     Cookies.set('token', itemdetail)
      //   })
      //   .catch(err => {
      //     console.log(err.response.status)
      //     if (err.response.status == 401) {
      //       setIsExpired(true)
      //     }
      //   })
      axios
        .post(`api/courses`, {
          USER_NAME: user
        }, {
          headers: {
            APP_KEY: process.env.REACT_APP_APP_KEY,
            Authorization: `Bearer ${token}`
          }
        })
        .then(async response => {
          const { code, item, itemdetail, message } = await response.data

          if (code === 10) {
            const { ACCOUNT_ID, MEM_ID, USER_NAME, REGISTER_DATE, CONFIRM_DATE, CONFIRM_STATUS, VIDEO_URL } = item

            setVideoUrl(VIDEO_URL)
            setStatus(CONFIRM_STATUS)
            setIsloading(false)
          } else {
            console.log('error')
            error(message)
          }

          Cookies.set('token', itemdetail)
        })
        .catch(err => {
          console.log(err.response.status)
          if (err.response.status == 401) {
            setIsExpired(true)
          }
        })
    }

    getData()
  }, [])

  return (
    isLoading ? (
      isExpired ? (
        <Warning />
      ) : (
        <>
          {contextHolder}
          <LoadingPage />
        </>
      )
    ) : (
      <Layout>
        <Banner
          status={status}
          videoUrl={videoUrl}
          lecturer={lecturer}
        />

        {
          status === '0' ? (
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
          ) : (
            status === '1' && (
              <Alert
                message="ระบบกำลังตรวจสอบการชำระเงินของท่าน"
                type="warning"
                className='alert'
              />
            )
          )
        }

        <Descriptions />

        <Lecturer lecturer={lecturer} />
      </Layout>
    )
  )
}

export default Courses
