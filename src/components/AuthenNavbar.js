import React from 'react'
import image from '../images/logo.png'
import { Avatar, Dropdown, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

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

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
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
