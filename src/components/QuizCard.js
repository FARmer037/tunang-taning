import { useContext, useState } from 'react'
import { Radio, Space } from 'antd'
import '../styles/Quiz.scss'
import { ScoreContext } from '../App'

const QuizCard = ({ question, id }) => {
  const { question_id, title, choice, answer } = question

  const { setScore, answerArr, setAnswerArr, count, setCount } = useContext(ScoreContext)

  const [value, setValue] = useState(null)

  const updateAnswer = (repeatedAnswer, value) => {
    const newAnswer = answerArr.map(item => {
      if (item.answer_id === repeatedAnswer.answer_id) {
        return { ...item, answer_value: value }
      } else {
        return item
      }
    })

    setAnswerArr(newAnswer)
  }

  const onChange = e => {
    setValue(e.target.value)

    const repeatedAnswer = answerArr.find(item => item.answer_id === question_id)

    if (repeatedAnswer) {
      updateAnswer(repeatedAnswer, e.target.value)
    } else {
      setAnswerArr(answerArr => [...answerArr, { answer_id: question_id, answer_value: e.target.value }])
      setCount(count + 1)
    }

    if (e.target.value === answer) {
      setScore(prev => prev + 1)
    }
  }

  return (
    <div className='quizcard'>
      <div className='quizcard__title'>
        <div className='number'>
          <p>{id}</p>
        </div>

        <div className='title'>
          <p>{title}</p>
        </div>
      </div>

      <div className='quizcard__choice'>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction='vertical'>
            {choice.map((element, index) => (
              <Radio key={index} value={index + 1}>
                {element.choice_name}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
    </div>
  )
}

export default QuizCard
