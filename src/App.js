import { useState, createContext, useEffect } from 'react'
import './App.css'
import { ConfigProvider } from 'antd'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Login from './Login'
import Courses from './Courses'
import DashBoard from './DashBoard'
import Quiz from './Quiz'
import Pay from './Pay'
import VideoPlayer from './VideoPlayer'
import Certificate from './Certificate'

export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const user = Cookies.get('user')

    if (user) {
      navigate('/courses')
    }
  }, [])

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#fb6f92',
            colorInfo: '#fb6f92'
          }
        }}
      >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/video' element={<VideoPlayer />} />
          <Route path='/certificate' element={<Certificate />} />
        </Routes>
      </ConfigProvider>
    </ScoreContext.Provider>
  )
}

export default App
