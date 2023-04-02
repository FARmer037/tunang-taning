import React from 'react'
import Layout from './components/Layout'
import banner from './images/banner.png'
import './styles/Home.scss'
import { Card, Button } from 'antd'
import gift1 from './images/gift1.jpeg'
import gift2 from './images/gift2.jpeg'
import gift3 from './images/gift3.jpeg'

const Home = () => {
    return (
        <Layout>
            <div className='home'>
                <div className='home__banner'>
                    <img src={banner} alt='home-banner' />

                    <div className='home__title'>
                        <h1>Tunang-Taning</h1>
                        <h2>เว็บแอพพลิเคชั่นอบรมก่อนแต่งงานสำหรับชาวมุสลิม</h2>
                    </div>
                </div>

                <div className='home__gift' id='gifts'>
                    <h1 className='home__gift-title'>ของที่ระลึก</h1>

                    <div className='home__gift-card-container'>
                        <Card
                            hoverable
                            style={{
                                width: 300,
                            }}
                            cover={<img alt="example" src={gift1} />}
                        >
                            <div className='card-item'>
                                <h2>ของชำร่วย “ลูกอม หมากฝรั่ง มิ้นต์”</h2>
                                <Button type='primary' style={{ alignSelf: 'center' }}>สั่งซื้อ</Button>
                            </div>
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 300,
                            }}
                            cover={<img alt="example" src={gift2} />}
                        >
                            <div className='card-item'>
                                <h2>ของชำร่วย “นํ้ามันมะกอก”</h2>
                                <Button type='primary' style={{ alignSelf: 'center' }}>สั่งซื้อ</Button>
                            </div>
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 300,
                            }}
                            cover={<img alt="example" src={gift3} />}
                        >
                            <div className='card-item'>
                                <h2>ของชำร่วย “ไม้แขวนเสื้อ”</h2>
                                <Button type='primary' style={{ alignSelf: 'center' }}>สั่งซื้อ</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
