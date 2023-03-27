import { Button } from 'antd'
import React from 'react'
import './styles/Warning.scss'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Warning = () => {
    const navigate = useNavigate()

    const logOut = () => {
        Cookies.remove('user')
        Cookies.remove('token')
        navigate('/')
    }

    return (
        <div className='warning'>
            <h1>Session timeout</h1>
            <p>You weren't clicking around any more, so we logged you out for your protection. To get back in, just login again.</p>

            <Button
                type="primary"
                className='warning__btn'
                onClick={logOut}
            >
                LOGIN
            </Button>
        </div>
    )
}

export default Warning
