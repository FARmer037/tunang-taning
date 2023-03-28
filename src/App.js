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
import Register2 from './Register2'

export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)

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
          <Route path='/register' element={<Register2 />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/quiz/:id' element={<Quiz />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/video' element={<VideoPlayer />} />
          <Route path='/certificate' element={<Certificate />} />
        </Routes>
      </ConfigProvider>
    </ScoreContext.Provider>
  )
}

export default App
