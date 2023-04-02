import React from 'react'
import '../styles/Navbar.scss'
import image from '../images/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={image} alt='logo' />

      <div className='navbar__menu'>
        <div className='navbar__menu-item'>
          <a href='/'>หน้าแรก</a>
          <a href='/'>กูรสุสอบรบแต่งงาน</a>
          <a href='/'>แต่งงานออนไลน์</a>
          <Link
            to="gifts"
            py={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            ของที่ระลึก
          </Link>
        </div>

        <div className='navbar__menu-login'>
          <a href='/'>เข้าสู่ระบบ</a>
          <a href='/' className='register'>
            ลงทะเบียน
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
