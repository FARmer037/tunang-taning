import React, { useContext, useState, useEffect } from 'react'
import Layout from './components/Layout'
import './styles/Quiz.scss'
import QuizCard from './components/QuizCard'
import { Button, message, Modal } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import { ScoreContext } from './App'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import LoadingPage from './LoadingPage'
import Warning from './Warning'
import Countdown from 'react-countdown'
import numeral from 'numeral'
import { getDate } from './util'

const Quiz = () => {
  const { id } = useParams()

  const { answerArr, count } = useContext(ScoreContext)

  const [open, setOpen] = useState(false)
  const [memId, setMemId] = useState(null)
  const [token, setToken] = useState(null)
  const [userScore, setUserScore] = useState(null)
  const [createAt, setCreateAt] = useState(null)
  const [questions, setQuestions] = useState(null)
  const [title, setTitle] = useState('')
  const [timeOut, setTimeOut] = useState(0)
  const [isExpired, setIsExpired] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'กรุณาทำข้อสอบให้ครบทุกข้อ'
    })
  }

  const onSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}QuizSubmit`, {
        MEM_ID: memId,
        GROUP_ID: id,
        DATE: getDate(),
        ANSWER: answerArr.sort()
      }, {
        headers: {
          APP_KEY: process.env.REACT_APP_APP_KEY,
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        // console.log(response.data)
        const { code, item, itemdetail, message } = response.data

        if (code === 10) {
          setUserScore(item.SCORE)
          setCreateAt(item.CREATE_DATE)
          setOpen(true)
        } else {
          alert(message)
        }

        Cookies.set('token', itemdetail)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onFinish = () => {
    if (count !== questions.length) {
      error()
    } else {
      onSubmit()
    }
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      onSubmit()
    } else {
      // Render a countdown
      return (
        <p>
          {minutes}:{numeral(seconds).format('00')}
        </p>
      )
    }
  }

  useEffect(() => {
    const question = async () => {
      const token = Cookies.get('token')
      const user = Cookies.get('user')

      setToken(token)
      setMemId(user)

      await axios
        .post(
          `${process.env.REACT_APP_API_URL}Quiz`,
          {
            GROUP_ID: id,
            MEM_ID: user
          },
          {
            headers: {
              APP_KEY: process.env.REACT_APP_APP_KEY,
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(async response => {
          const { code, item, itemdetail, message } = response.data

          if (code === 10) {
            setTitle(item.Quiz_Type)
            setQuestions(item.Quiz)
            setUserScore(item.SCORE)
            setCreateAt(item.CREATE_DATE)

            if (item.STATUS === '0') {
              setTimeOut(item.TimeOut * 60 * 1000)
            } else {
              setOpen(true)
            }
          } else {
            alert(message)
          }

          Cookies.set('token', itemdetail)
        })
        .catch(err => {
          console.log(err.response.status)
          if (err.response.status === 401) {
            setIsExpired(true)
          }
        })
    }

    question()
  }, [])

  return !questions ? (
    isExpired ? (
      <Warning />
    ) : (
      <LoadingPage />
    )
  ) : (
    <Layout>
      <div className='quiz'>
        {contextHolder}
        <div className='quiz__header'>
          <h1>{title}</h1>

          <div className='quiz__header-timer'>
            <ClockCircleOutlined
              style={{ color: '#fb6f92', marginRight: 8 }}
              className='reg_icon'
            />
            <Countdown date={Date.now() + timeOut} renderer={renderer} />
          </div>
        </div>

        <div className='quiz__title-box'>
          <h3>จงเลือกคำตอบที่ถูกเพียง 1 ข้อ</h3>
        </div>

        {questions.map(element => (
          <QuizCard
            key={element.QUESTION_ID}
            id={element.QUESTION_ID}
            question={element}
          />
        ))}

        <div>
          <Button type='primary' onClick={onFinish}>
            ส่งคำตอบ
          </Button>
        </div>

        <Modal centered open={open} closable={false} footer={null} width={720}>
          <div className='quiz__result'>
            <h3>You obtained</h3>
            <h1>
              {userScore}
              <span>/15</span>
            </h1>
            <h3>on this quiz/test</h3>

            <h3>
              <i>The submission was made on {createAt}</i>
            </h3>
          </div>
        </Modal>
      </div>
    </Layout>
  )
}

export default Quiz
