import React, { useState, useEffect } from 'react'
import './styles/Certificate.scss'
import { Button } from 'antd'
import Layout from './components/Layout'
import cerImage from './images/certificate/cer.jpg'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Cookies from 'js-cookie'
import axios from 'axios'
import Warning from './Warning'
import LoadingPage from './LoadingPage'

const Certificate = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isExpired, setIsExpired] = useState(false)
  const [username, setUsername] = useState('')
  const [idCardNo, setIdCardNo] = useState('')
  const [address, setAddress] = useState('')
  const [gradDate, setGradDate] = useState('')
  const [gradDateArab, setGradDateArab] = useState('')
  const [cerNo, setCerNo] = useState('')

  const exportPDF = () => {
    const input = document.getElementById('certificate')

    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true
    }).then(canvas => {
      const imageWidth = 210
      const imageHeight = (canvas.height * imageWidth) / canvas.width
      const imageData = canvas.toDataURL('img/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      pdf.addImage(imageData, 'PNG', 0, 0, imageWidth, imageHeight)
      pdf.save('certificate.pdf')
    })
  }

  useEffect(() => {
    const token = Cookies.get('token')
    const user = Cookies.get('user')

    axios
      .post(
        `${process.env.REACT_APP_API_URL}Certificate`,
        {
          MEM_ID: user
        },
        {
          headers: {
            APP_KEY: process.env.REACT_APP_APP_KEY,
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(async response => {
        // console.log(response.data)
        const { code, item, itemdetail, message } = await response.data

        if (code === 10) {
          const {
            USER_NAME,
            ID_CARD_NO,
            ADDRESS,
            GRAD_DATE,
            GRAD_DATE_ARAB,
            CER_NO
          } = item

          setUsername(USER_NAME)
          setIdCardNo(ID_CARD_NO)
          setAddress(ADDRESS)
          setGradDate(GRAD_DATE)
          setGradDateArab(GRAD_DATE_ARAB)
          setCerNo(CER_NO)
          setIsLoading(false)
        } else {
          alert(message)
        }

        Cookies.set('token', itemdetail)
      })
      .catch(err => {
        console.log(err.response.status)
        if (err.response.status === 401) {
          setIsExpired(true)
        }
      })
  }, [])

  return isLoading ? (
    isExpired ? (
      <Warning />
    ) : (
      <LoadingPage />
    )
  ) : (
    <Layout>
      <div className='certificate'>
        <div className='certificate__header'>
          <Button onClick={exportPDF}>Download PDF</Button>
        </div>
        <div className='certificate__body'>
          <div id='certificate' className='certificate__body-certificate'>
            <img src={cerImage} alt='certificate' />

            <p className='cer-no'>{cerNo}</p>
            <p className='id-number'>{idCardNo}</p>
            <p className='name'>{username}</p>
            <p className='address'>{address}</p>
            <p className='date-left'>{gradDate}</p>
            <p className='date-right'>{gradDateArab}</p>

            {/* <p className='sign-left'>อรุณ</p> */}
            {/* <p className='sign-right'>อับดุลเลาะ</p> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Certificate
