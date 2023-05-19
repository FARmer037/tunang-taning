import React from 'react'
import './styles/Books.scss'
import { Image, Button } from 'antd'
import ebookThai from './images/ebooks/ebook-thai.jpg'
import ebookArab from './images/ebooks/ebook-arab.jpg'
import ebookMalay from './images/ebooks/ebook-malay.jpg'
import ebookEnglish from './images/ebooks/ebook-english.jpg'
import Layout from './components/Layout'
import { Link } from 'react-router-dom'
import ebookThaiPdf from './pdf/ebook-thai.pdf'
import ebookEnglishPdf from './pdf/ebook-english.pdf'
import ebookMalayPdf from './pdf/ebook-malay.pdf'
import ebookArabPdf from './pdf/ebook-arab.pdf'

const ebooks = [
    {
        language: 'ภาษาไทย',
        cover: ebookThai,
        ebookLink: 'https://online.fliphtml5.com/cyhma/wdqa/?fbclid=IwAR0-klPpcH7KgBRtrBxp7eGGibe-OnQyBQ3iTRLvelfBumrxg-mObcAOUj8#p=1',
        pdfLink: ebookThaiPdf
    },
    {
        language: 'อาหรับ',
        cover: ebookArab,
        ebookLink: 'https://online.fliphtml5.com/cyhma/mucm/?fbclid=IwAR02oiYYkowXD-zXhhvuYrcpr1fRy91EB0sVzxwD73lEZNCbLkUopx8NP04#p=1',
        pdfLink: ebookArabPdf
    },
    {
        language: 'มลายู',
        cover: ebookMalay,
        ebookLink: 'https://online.fliphtml5.com/cyhma/mdeb/?fbclid=IwAR3LPrxpIqvubszfMnksNmGl67J8lWn4Gw9Ysb-L5gHOSe_EmKbxYbnmeBg#p=1',
        pdfLink: ebookMalayPdf
    },
    {
        language: 'อังกฤษ',
        cover: ebookEnglish,
        ebookLink: 'https://online.fliphtml5.com/cyhma/izhw/?fbclid=IwAR3D6_8yfAPK1vKqcGNVoAQx-WnOV2b5h24pJHhgiVL375tFsfhsiNFqgUU#p=1',
        pdfLink: ebookEnglishPdf
    },
]

const BookCard = ({ language, cover, ebookLink, pdfLink }) => {
    return (
        <div className='bookcard'>
            <h3>{language}</h3>

            <Image
                width={250}
                style={{ marginTop: 10, marginBottom: 30 }}
                src={cover}
                preview={false}
            />

            <Link
                style={{ width: '100%', marginBottom: 14 }}
                to={ebookLink}
                target="_blank"
            >
                <Button type='primary' style={{ width: '100%' }}>ดาวน์โหลด e-book</Button>
            </Link>
            <Link
                style={{ width: '100%', marginBottom: 14 }}
                to={pdfLink}
                target="_blank"
            >
                <Button style={{ width: '100%' }}>ดาวน์โหลด PDF</Button>
            </Link>
        </div>
    )
}

const Books = () => {
    return (
        <Layout>
            <div className='books'>
                <h1>คู่มืออบรม</h1>

                <div className='books__list'>
                    {
                        ebooks.map((item, index) => (
                            <BookCard
                                key={index}
                                language={item.language}
                                cover={item.cover}
                                ebookLink={item.ebookLink}
                                pdfLink={item.pdfLink}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Books
