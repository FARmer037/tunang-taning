import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import AuthenNavbar from './AuthenNavbar'
import Cookies from 'js-cookie'

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
          <Navbar />
        ) : (
          <AuthenNavbar />
        )
      }

      <div className='layout'>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
