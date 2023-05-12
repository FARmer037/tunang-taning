import React from 'react'
import '../../styles/Courses.scss'
import image from '../../images/lecturer2.jpeg'

const Lecturer = ({ lecturer }) => {
  return (
    <div className='lecturer'>
      <h1>อาจารย์ผู้สอน</h1>

      <img src={image} alt='lecturer' />

      <h3>{lecturer}</h3>
    </div>
  )
}

export default Lecturer
