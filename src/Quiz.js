import React, { useContext, useState, useEffect } from 'react'
import Layout from './components/Layout'
import './styles/Quiz.scss'
import QuizCard from './components/QuizCard'
import { Button, message } from 'antd'
import { ScoreContext } from './App'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import LoadingPage from './LoadingPage'
import Warning from './Warning'
import { questions as MockQuestion } from './Question'

const Quiz = () => {
  const { id } = useParams()

  const { score, answerArr, count } = useContext(ScoreContext)

  const [isDone, setIsDone] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [title, setTitle] = useState('')
  const [timeOut, setTimeOut] = useState(0)
  const [isExpired, setIsExpired] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'กรุณาทำข้อสอบให้ครบทุกข้อ',
    });
  }

  const onSubmit = () => {
    console.log(MockQuestion.length, count)
    if (count !== MockQuestion.length) {
      error()
    } else {
      // push answerArr to server
      console.log(answerArr.sort())
    }
  }

  useEffect(() => {
    const question = async () => {
      const token = await Cookies.get('token')

      await axios
        .post(`${process.env.REACT_APP_API_URL}/Quiz`, {
          GROUP_ID: id
        }, {
          headers: {
            APP_KEY: process.env.REACT_APP_APP_KEY,
            Authorization: `Bearer ${token}`
          }
        })
        .then(async response => {
          const { code, item, itemdetail } = response.data

          if (code === 10) {
            setTitle(item.Quiz_Type)
            setQuestions(item.Quiz)
            setTimeOut(item.TimeOut)
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

    // question()
  }, [])

  return (
    !MockQuestion ? (
      isExpired ? (
        <Warning />
      ) : (
        <LoadingPage />
      )
    ) : (
      <Layout>
        {isDone ? (
          <div className='quiz'>
            <div className='quiz__result'>
              <h3>You obtained</h3>
              <h1>
                {score}<span>/15</span>
              </h1>
              <h3>on this quiz/test</h3>

              <h3>
                <i>The submission was made on 24-Mar-2023 @ 10:30:53</i>
              </h3>
            </div>
          </div>
        ) : (
          <div className='quiz'>
            {contextHolder}
            <h1>แบบทดสอบก่อนเรียน (Pretest)</h1>

            <div className='quiz__title-box'>
              <h3>จงเลือกคำตอบที่ถูกเพียง 1 ข้อ</h3>
            </div>

            {MockQuestion.map((element, index) => (
              <QuizCard key={index} id={index + 1} question={element} />
            ))}

            <div>
              <Button type='primary' onClick={onSubmit}>
                ส่งคำตอบ
              </Button>
            </div>
          </div>
        )}
      </Layout>
    )

  )
}

export default Quiz
