import React from 'react'
import image from '../images/logo.png'
import { Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const items = [
    {
        label: 'My Account',
        key: '1',
    },
    {
        label: 'Account Info',
        key: '2',
    },
    {
        label: 'Sign Out',
        key: '3',
    },
]

const AuthenNavbar = () => {
    const navigate = useNavigate()

    const onClick = ({ key }) => {
        if (key === '3') {
            navigate('/')
        }
    }

    return (
        <div className='navbar'>
            <img src={image} alt='logo' />

            <div className='navbar__menu'>
                <Dropdown
                    menu={{
                        items,
                        onClick,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

export default AuthenNavbar
