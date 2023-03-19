import './App.css'
import { ConfigProvider } from 'antd'
import Login from './Login'
import Courses from './Courses'
import DashBoard from './DashBoard'
import Quiz from './Quiz'

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
      <Quiz />
    </ConfigProvider>
  )
}

export default App
