import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingPage from './LoadingPage'

const Test = () => {
    const [code, setCode] = useState(null)
    const [item, setItem] = useState(null)
    const [itemdetail, setItemdetail] = useState(null)
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = () => {
            axios.post(`${process.env.REACT_APP_API_URL}GetMember`, {
                test: '1234'
            }, {
                headers: {
                    Authorization: `App ${process.env.REACT_APP_AUTHORIZATION}`,
                    APP_KEY: process.env.REACT_APP_APP_KEY
                }
            })
                .then(response => {
                    console.log(response.data)
                    const { code, item, itemdetail, message } = response.data

                    if (code === 10) {
                        setItem('success!')
                    }

                    setCode(code)
                    setItemdetail(itemdetail)
                    setMessage(message)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        getData()
    }, [])

    return (
        isLoading ? (
            <LoadingPage />
        ) : (
            <div>
                สดสอบ

                <div>
                    <p>code: {code}</p>
                    <p>item: {!item ? 'null' : item}</p>
                    <p>itemdetail: {!itemdetail ? 'null' : itemdetail}</p>
                    <p>message: {message}</p>
                </div>
            </div>
        )
    )
}

export default Test
