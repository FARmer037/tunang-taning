import { useContext, useState } from 'react'
import { Radio, Space } from 'antd'
import '../styles/Quiz.scss'
import { ScoreContext } from '../App'

const QuizCard = ({ question, id }) => {
  const { title, choices, answer } = question

  const { setScore } = useContext(ScoreContext)
  const [value, setValue] = useState(null)

  const onChange = e => {
    setValue(e.target.value)

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
            {choices.map((element, index) => (
              <Radio key={index} value={index + 1}>
                {element.choice}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
    </div>
  )
}

export default QuizCard
