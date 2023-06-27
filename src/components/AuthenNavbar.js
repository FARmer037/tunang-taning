import React, { useState, useEffect } from 'react'
import image from '../images/logo.png'
import { Avatar, Dropdown, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

const items = [
    {
        label: 'ออกจากระบบ',
        key: '1',
    },
]

const AuthenNavbar = () => {
    const navigate = useNavigate()

    const [fullname, setFullname] = useState(null)
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const logOut = () => {
        Cookies.remove('user')
        Cookies.remove('token')
        Cookies.remove('fullname')
        Cookies.remove('confirm')
        navigate('/')
    }

    const onClick = ({ key }) => {
        if (key === '1') {
            logOut()
        }
    }

    useEffect(() => {
        setFullname(Cookies.get('fullname'))
    }, [])

    return (
        <>
            <div className='navbar'>
                <a href='/'>
                    <img src={image} alt='logo' />
                </a>

                <div className='navbar__menu'>
                    <div className='navbar__menu-item'>
                        <a href='/'>หน้าแรก</a>
                        <a href='/courses'>คอร์สอบรม</a>
                    </div>
                    <Dropdown
                        menu={{
                            items,
                            onClick,
                        }}
                    >
                        <div className='navbar__menu-user'>
                            <h4>{fullname}</h4>
                            <Avatar style={{ backgroundColor: '#fb6f92' }} icon={<UserOutlined />} />
                        </div>
                    </Dropdown>
                </div>
            </div>

            <div className='navbarMobile'>
                <a href='/'>
                    <img src={image} alt='logo' />
                </a>

                <MenuOutlined onClick={showDrawer} />
            </div>

            <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <div className='navbar__menu-user'>
                            <h4>{fullname}</h4>
                        </div>
                    </Space>
                }
            >
                <div className='navbar__menu'>
                    <div className='navbar__menu-item'>
                        <a href='/'>หน้าแรก</a>
                        <a href='/courses'>คอร์สอบรม</a>
                    </div>

                    <div className='navbar__menu-login'>
                        <a onClick={logOut}>ออกจากระบบ</a>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default AuthenNavbar
