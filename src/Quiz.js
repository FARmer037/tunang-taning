import React, { useContext, useState } from 'react'
import Layout from './components/Layout'
import './styles/Quiz.scss'
import QuizCard from './components/QuizCard'
import { questions } from './Question'
import { Button } from 'antd'
import { ScoreContext } from './App'

const Quiz = () => {
  const { score } = useContext(ScoreContext)

  const [isDone, setIsDone] = useState(false)

  return (
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
          <h1>แบบทดสอบก่อนเรียน (Pretest)</h1>

          <div className='quiz__title-box'>
            <h3>จงเลือกคำตอบที่ถูกเพียง 1 ข้อ</h3>
          </div>

          {questions.map((element, index) => (
            <QuizCard key={index} id={index + 1} question={element} />
          ))}

          <div>
            <Button type='primary' onClick={() => setIsDone(true)}>
              ส่งคำตอบ
            </Button>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Quiz
