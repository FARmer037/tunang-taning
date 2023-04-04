import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import AuthenNavbar from './AuthenNavbar'

const Layout = ({ children }) => {
  const [isAuthen, setIsAuthen] = useState(false)
  return (
    <>
      {
        isAuthen ? (
          <AuthenNavbar />
        ) : (
          <Navbar />
        )
      }

      <div className='layout'>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
