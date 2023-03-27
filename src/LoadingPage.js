import React from 'react'
import './styles/Loading.scss'
import { Spin } from 'antd'
import image from './images/logo.png'

const LoadingPage = () => {
    return (
        <div className='loading'>
            <Spin size='large' />

            <img src={image} alt='logo' className='loading__logo' />
        </div>
    )
}

export default LoadingPage
