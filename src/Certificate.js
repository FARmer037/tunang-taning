import React from 'react'
import './styles/Certificate.scss'
import { Button } from 'antd'
import Layout from './components/Layout'
import cerImage from './images/certificate/cer.jpg'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const Certificate = () => {
    const exportPDF = () => {
        
        console.log('exportPDF')
        const input = document.getElementById('certificate')

        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imageWidth = 210
            const imageHeight = canvas.height * imageWidth / canvas.width
            const imageData = canvas.toDataURL('img/png')
            const pdf = new jsPDF('p', 'mm', 'a4')
            pdf.addImage(imageData, 'PNG', 0, 0, imageWidth, imageHeight)
            pdf.save('certificate.pdf')
        })
    }

    return (
        <Layout>
            <div className='certificate'>
                <div className='certificate__header'>
                    <Button onClick={exportPDF}>Download PDF</Button>
                </div>
                <div className='certificate__body'>
                    <div id='certificate' className='certificate__body-certificate'>
                        <img src={cerImage} />

                        <p className='id-number'>1910500140367</p>
                        <p className='name'>นายมุสตอฟา สาจิ</p>
                        <p className='address'>123 ม.5 ต.กำแพง อ.ละงู จ.สตูล 91110</p>
                        <p className='date-left'>21 มีนาคม 2566</p>
                        <p className='date-right'>28 ชะอ์บาน 1444</p>

                        <p className='sign-left'>อรุณ</p>
                        <p className='sign-right'>อับดุลเลาะ</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Certificate
