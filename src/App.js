import './App.css'
import { ConfigProvider } from 'antd'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Courses from './Courses'
import DashBoard from './DashBoard'
import Quiz from './Quiz'
import Pay from './Pay'

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fb6f92',
          colorInfo: '#fb6f92'
        }
      }}
    >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/pay' element={<Pay />} />
      </Routes>
    </ConfigProvider>
  )
}

export default App
