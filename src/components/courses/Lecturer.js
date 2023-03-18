import React from 'react'
import '../../styles/Courses.scss'
import image from '../../images/lecturer.png'

const Lecturer = () => {
  return (
    <div className='lecturer'>
      <h1>อาจารย์ผู้สอน</h1>

      <img src={image} alt='lecturer' />

      <h3>รศ. ดร.สมิทธิ์ บุญชุติมา</h3>

      <p>อาจารย์ประจำภาควิชาการประชาสัมพันธ์</p>
      <p>คณะนิเทศศาสตร์</p>
      <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
    </div>
  )
}

export default Lecturer
