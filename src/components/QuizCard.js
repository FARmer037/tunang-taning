import { useContext, useState } from 'react'
import { Radio, Space } from 'antd'
import '../styles/Quiz.scss'
import { ScoreContext } from '../App'

const QuizCard = ({ question, id }) => {
  const { QUESTION_ID, title, choice } = question

  const { answerArr, setAnswerArr, count, setCount } = useContext(ScoreContext)

  const [value, setValue] = useState(null)

  const updateAnswer = (repeatedAnswer, value) => {
    const newAnswer = answerArr.map(item => {
      if (item.QUESTIONS_ID === repeatedAnswer.QUESTIONS_ID) {
        return { ...item, ANSWER_VALUE: value }
      } else {
        return item
      }
    })

    setAnswerArr(newAnswer)
  }

  const onChange = e => {
    setValue(e.target.value)

    const repeatedAnswer = answerArr.find(
      item => item.QUESTIONS_ID === QUESTION_ID
    )

    if (repeatedAnswer) {
      updateAnswer(repeatedAnswer, e.target.value)
    } else {
      setAnswerArr(answerArr => [
        ...answerArr,
        { QUESTIONS_ID: QUESTION_ID, ANSWER_VALUE: e.target.value + '' }
      ])
      setCount(count + 1)
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
              <Radio key={index} value={element.choice_id}>
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
