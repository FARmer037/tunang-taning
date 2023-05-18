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
import Books from './Books'

export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [answerArr, setAnswerArr] = useState([])

  const [belongTo, setBelongTo] = useState(null)
  const [nameTitle, setNameTitle] = useState(null)
  const [firstNameTH, setFirstNameTH] = useState('')
  const [lastNameTH, setLastNameTH] = useState('')
  const [firstNameAR, setFirstNameAR] = useState('')
  const [lastNameAR, setLastNameAR] = useState('')
  const [idCardNumber, setidCardNumber] = useState('')
  const [idCardCopy, setIdCardCopy] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [mosqueName, setMosqueName] = useState('')
  const [birthDateShow, setBirthDateShow] = useState(dayjs())
  const [birthDate, setBirthDate] = useState(null)
  const [age, setAge] = useState(0)
  const [sex, setSex] = useState(null)
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState(null)
  const [addNumber, setAddNumber] = useState('')
  const [addMoo, setAddMoo] = useState('')
  const [addThanon, setAddThanon] = useState('')
  const [addTambon, setAddTambon] = useState('')
  const [addAmphoe, setAddAmphoe] = useState('')
  const [addChangwat, setAddChangwat] = useState('')
  const [addZipCode, setAddZipCode] = useState('')
  
  const [sendingPlace, setSendingPlace] = useState('same')
  const [sendNumber, setSendNumber] = useState('')
  const [sendMoo, setSendMoo] = useState('')
  const [sendThanon, setSendThanon] = useState('')
  const [sendTambon, setSendTambon] = useState('')
  const [sendAmphoe, setSendAmphoe] = useState('')
  const [sendChangwat, setSendChangwat] = useState('')
  const [sendZipCode, setSendZipCode] = useState('')

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
        nameTitle, setNameTitle,
        firstNameTH, setFirstNameTH,
        lastNameTH, setLastNameTH,
        firstNameAR, setFirstNameAR,
        lastNameAR, setLastNameAR,
        idCardNumber, setidCardNumber,
        idCardCopy, setIdCardCopy,
        phoneNumber, setPhoneNumber,
        mosqueName, setMosqueName,
        birthDateShow, setBirthDateShow,
        birthDate, setBirthDate,
        age, setAge,
        sex, setSex,
        email, setEmail,
        occupation, setOccupation,
        sendingPlace, setSendingPlace,
        addNumber, setAddNumber,
        addMoo, setAddMoo,
        addThanon, setAddThanon,
        addTambon, setAddTambon,
        addAmphoe, setAddAmphoe,
        addChangwat, setAddChangwat,
        addZipCode, setAddZipCode,
        sendNumber, setSendNumber,
        sendMoo, setSendMoo,
        sendThanon, setSendThanon,
        sendTambon, setSendTambon,
        sendAmphoe, setSendAmphoe,
        sendChangwat, setSendChangwat,
        sendZipCode, setSendZipCode,
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
          <Route path='/books' element={<Books />} />
          <Route path='/test' element={<Test />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </ConfigProvider>
    </ScoreContext.Provider>
  )
}

export default App
