import { useState, createContext } from 'react'
import './App.css'
import { ConfigProvider } from 'antd'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Courses from './Courses'
import DashBoard from './DashBoard'
import Quiz from './Quiz'
import Pay from './Pay'
import VideoPlayer from './VideoPlayer'
import Certificate from './Certificate'
import Register from './Register'
import Page404 from './Page404'
import Home from './Home'

export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [answerArr, setAnswerArr] = useState([])

  return (
    <ScoreContext.Provider value={{ score, setScore, count, setCount, answerArr, setAnswerArr }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#fb6f92',
            colorInfo: '#fb6f92'
          }
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/quiz/:id' element={<Quiz />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/video/:id' element={<VideoPlayer />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </ConfigProvider>
    </ScoreContext.Provider>
  )
}

export default App
