import React, { useState } from 'react'
import '../styles/Navbar.scss'
import image from '../images/logo.png'
import { Link as LinkId } from 'react-scroll'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div className='navbar'>
        <a href='/'>
          <img src={image} alt='logo' />
        </a>

        <div className='navbar__menu'>
          <div className='navbar__menu-item'>
            <a href='/'>หน้าแรก</a>
            <a href='/courses'>กูรสุสอบรบแต่งงาน</a>
            <a href='/courses'>แต่งงานออนไลน์</a>
            <LinkId
              to='gifts'
              py={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              ของที่ระลึก
            </LinkId>
          </div>

          <div className='navbar__menu-login'>
            <Link to='/register'>ลงทะเบียน</Link>
            <Link to='/login' className='register'>เข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>

      <div className='navbarMobile'>
        <img src={image} alt='logo' />

        <MenuOutlined onClick={showDrawer} />
      </div>

      <Drawer placement="right" onClose={onClose} open={open}>
        <div className='navbar__menu'>
          <div className='navbar__menu-item'>
            <a href='/'>หน้าแรก</a>
            <a href='/courses'>กูรสุสอบรบแต่งงาน</a>
            <a href='/courses'>แต่งงานออนไลน์</a>
            <LinkId
              to='gifts'
              py={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              ของที่ระลึก
            </LinkId>
          </div>

          <div className='navbar__menu-login'>
            <Link to='/register'>ลงทะเบียน</Link>
            <Link to='/login' className='register'>เข้าสู่ระบบ</Link>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
