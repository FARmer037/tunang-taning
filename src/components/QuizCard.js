import { useState } from 'react'
import { Radio, Space } from 'antd'
import '../styles/Quiz.scss'

const QuizCard = ({ question, id }) => {
    const [value, setValue] = useState(null)

    const { title, choices } = question

    const onChange = (e) => {
        console.log('radio checked', e.target.value)
        setValue(e.target.value)
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
                    <Space direction="vertical">
                        {
                            choices.map((element, index) => (
                                <Radio value={index + 1}>{element.choice}</Radio>
                            ))
                        }
                    </Space>
                </Radio.Group>
            </div>
        </div>
    )
}

export default QuizCard
