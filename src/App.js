import './App.css'
import { ConfigProvider } from 'antd'
import Login from './Login'
import Courses from './Courses'
import DashBoard from './DashBoard'

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
      <DashBoard />
    </ConfigProvider>
  )
}

export default App
