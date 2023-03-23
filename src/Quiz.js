import React, { useContext } from 'react'
import Layout from './components/Layout'
import './styles/Quiz.scss'
import QuizCard from './components/QuizCard'
import { questions } from './Question'
import { Button } from 'antd'
import { ScoreContext } from './App'

const Quiz = () => {
  const { score } = useContext(ScoreContext)

  return (
    <Layout>
      <div className='quiz'>
        <h1>แบบทดสอบก่อนเรียน (Pretest)</h1>

        <div className='quiz__title-box'>
          <h3>จงเลือกคำตอบที่ถูกเพียง 1 ข้อ</h3>
        </div>

        {questions.map((element, index) => (
          <QuizCard key={index} id={index + 1} question={element} />
        ))}

        <Button type='primary' onClick={() => console.log(score)}>
          ส่งคำตอบ
        </Button>
      </div>
    </Layout>
  )
}

export default Quiz
