import './App.css'
import { ConfigProvider } from 'antd'
import Login from './Login'
import Courses from './Courses'

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fb6f92'
        }
      }}
    >
      <Courses />
    </ConfigProvider>
  )
}

export default App
