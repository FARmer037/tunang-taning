import { useState, createContext } from 'react'
import './App.css'
import { ConfigProvider } from 'antd'
import { Route, Routes } from 'react-router-dom'
import dayjs from 'dayjs'
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
import Test from './Test'

export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [answerArr, setAnswerArr] = useState([])

  const [belongTo, setBelongTo] = useState(null)
  const [firstNameTH, setFirstNameTH] = useState('')
  const [lastNameTH, setLastNameTH] = useState('')
  const [firstNameEN, setFirstNameEN] = useState('')
  const [lastNameEN, setLastNameEN] = useState('')
  const [idCardNumber, setidCardNumber] = useState('')
  const [idCardCopy, setIdCardCopy] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [mosqueAdress, setMosqueAddress] = useState('')
  const [birthDateShow, setBirthDateShow] = useState(dayjs())
  const [birthDate, setBirthDate] = useState(null)
  const [age, setAge] = useState(0)
  const [sex, setSex] = useState(null)
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState(null)
  const [sendingPlace, setSendingPlace] = useState('')
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [otp, setOtp] = useState('')

  return (
    <ScoreContext.Provider
      value={{
        score, setScore,
        count, setCount,
        answerArr, setAnswerArr,
        belongTo, setBelongTo,
        firstNameTH, setFirstNameTH,
        lastNameTH, setLastNameTH,
        firstNameEN, setFirstNameEN,
        lastNameEN, setLastNameEN,
        idCardNumber, setidCardNumber,
        idCardCopy, setIdCardCopy,
        phoneNumber, setPhoneNumber,
        mosqueAdress, setMosqueAddress,
        birthDateShow, setBirthDateShow,
        birthDate, setBirthDate,
        age, setAge,
        sex, setSex,
        address, setAddress,
        email, setEmail,
        occupation, setOccupation,
        sendingPlace, setSendingPlace,
        username, setUsername,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        otp, setOtp
      }}
    >
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
          <Route path='/test' element={<Test />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </ConfigProvider>
    </ScoreContext.Provider>
  )
}

export default App
