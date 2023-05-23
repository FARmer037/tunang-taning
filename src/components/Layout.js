import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import AuthenNavbar from './AuthenNavbar'
import Cookies from 'js-cookie'
import { Affix } from 'antd'

const Layout = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = Cookies.get('user')

    setUser(user)
  }, [])

  return (
    <>
      {
        !user ? (
          <Affix offsetTop={0}>
            <Navbar />
          </Affix>
        ) : (
          <Affix offsetTop={0}>
            <AuthenNavbar />
          </Affix>
        )
      }

      <div className='layout'>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
